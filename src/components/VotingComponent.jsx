import React, { useEffect, useState } from 'react';
import supabase from '../lib/supabaseClient';
import styles from './VotingComponent.module.css';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from 'recharts';

const COLORS = [
  '#D52B1E', // Swiss Red
  '#2B2B2B', // Dark Grey
  '#6B7280', // Neutral Grey
  '#8C1D18', // Deep Burgundy
  '#9CA3AF', // Light Grey
];

export default function VotingComponent({ adminMode = false, view = 'full' }) {
  const [sites, setSites] = useState([]);
  const [topSites, setTopSites] = useState([]);
  const [newSite, setNewSite] = useState('');
  const [rationale, setRationale] = useState('');
  const [voteMessage, setVoteMessage] = useState({});
  const [recentVoteId, setRecentVoteId] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  // Fetch sites and check if user already submitted
  useEffect(() => {
    fetchSites();
    checkUserSubmission();
  }, []);

  async function fetchSites() {
    const { data, error } = await supabase
      .from('trusted_sites')
      .select('*')
      .order('votes', { ascending: false });

    if (!error && data) {
      const visible = data.filter(site => adminMode || !site.is_hidden);
      setSites(visible);
      setTopSites(visible.slice(0, 5));
    }
  }

  // Check if the user has already submitted a site
  async function checkUserSubmission() {
    // Example: You could track by IP or email if available
    // For now, check localStorage
    const stored = JSON.parse(localStorage.getItem('espa_submitted') || 'false');
    setHasSubmitted(stored);
  }

  async function handleVote(id) {
    try {
      const votesRecord = JSON.parse(localStorage.getItem('espa_votes') || '{}');
      const lastVoteTime = votesRecord[id] || 0;
      const cooldown = 5 * 60 * 1000;

      if (Date.now() - lastVoteTime < cooldown) {
        alert('Please wait a few minutes before voting again.');
        return;
      }

      // Optimistic UI
      setSites(prev =>
        prev.map(site =>
          site.id === id ? { ...site, votes: site.votes + 1 } : site
        )
      );
      setTopSites(prev =>
        prev.map(site =>
          site.id === id ? { ...site, votes: site.votes + 1 } : site
        )
      );
      setRecentVoteId(id);

      const { error } = await supabase.rpc('increment_votes', { site_id: id });
      if (error) throw error;

      votesRecord[id] = Date.now();
      localStorage.setItem('espa_votes', JSON.stringify(votesRecord));

      setVoteMessage(prev => ({ ...prev, [id]: true }));
      setTimeout(() => setVoteMessage(prev => ({ ...prev, [id]: false })), 2500);
      setTimeout(() => setRecentVoteId(null), 1500);
    } catch (err) {
      console.error('Vote failed:', err);
      fetchSites();
    }
  }

  async function handleSubmit() {
    if (!newSite.trim()) {
      alert('Please enter a site URL.');
      return;
    }

    setIsSubmitting(true);

    // Insert site into Supabase
    const { error } = await supabase
      .from('trusted_sites')
      .insert({
        url: newSite.trim(),
        rationale: rationale.trim(),
        votes: 0,
      });

    if (error) {
      console.error(error);
      alert('Submission failed');
    } else {
      setNewSite('');
      setRationale('');
      setHasSubmitted(true);
      localStorage.setItem('espa_submitted', 'true'); // optional persistence
      fetchSites(); // refresh list
    }

    setIsSubmitting(false);
  }

  async function handleHide(id) {
    if (!adminMode) return;
    await supabase.from('trusted_sites').update({ is_hidden: true }).eq('id', id);
    fetchSites();
  }

  return (
    <div className={styles.votingContainer}>
      {/* Pie Chart */}
      {(view === 'full' || view === 'chart') && topSites.length > 0 && (
        <div className={styles.topSitesContainer}>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={topSites}
                dataKey="votes"
                nameKey="url"
                cx="50%"
                cy="50%"
                outerRadius={100}
                animationDuration={700}
              >
                {topSites.map((entry, index) => (
                  <Cell
                    key={entry.id}
                    fill={
                      entry.id === recentVoteId
                        ? '#FF4D4F'
                        : COLORS[index % COLORS.length]
                    }
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* Submission + List */}
      {(view === 'full' || view === 'submit') && (
        <>
          <ul className={styles.siteList}>
            {sites.map(site => (
              <li key={site.id} className={styles.siteItem}>
                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.siteLink}
                >
                  {site.url}
                </a>
                {site.rationale && <p className={styles.rationale}>{site.rationale}</p>}

                <button
                  onClick={() => handleVote(site.id)}
                  className={styles.voteButton}
                >
                  ▲ {site.votes}
                </button>

                {voteMessage[site.id] && (
                  <span className={styles.voteFeedback}>Vote recorded</span>
                )}

                {adminMode && (
                  <button
                    onClick={() => handleHide(site.id)}
                    className={styles.hideButton}
                  >
                    ✕ Hide
                  </button>
                )}
              </li>
            ))}
          </ul>

          <div className={styles.formRow}>
            <input
              type="text"
              placeholder="Submit a trusted website"
              value={newSite}
              onChange={e => setNewSite(e.target.value)}
              disabled={hasSubmitted || isSubmitting}
            />
            <input
              type="text"
              placeholder="Optional rationale"
              value={rationale}
              onChange={e => setRationale(e.target.value)}
              disabled={hasSubmitted || isSubmitting}
            />
            <button
              onClick={handleSubmit}
              disabled={hasSubmitted || isSubmitting}
            >
              {isSubmitting ? 'Submitting…' : hasSubmitted ? 'Submitted' : 'Submit'}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

