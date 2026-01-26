import React from 'react';
import Layout from '@theme/Layout';
import VotingComponent from '../components/VotingComponent';
import styles from './CommunityPage.module.css';

export default function CommunityPage() {
  return (
    <Layout
      title="Community Voting"
      description="Submit and vote on trusted websites with the ESPA community."
    >
      <main className="container container--lg">

        {/* Centered Page Title */}
        <h1 className={styles.votingHeader}>
          Community-Aligned Submitted Sites
        </h1>

         {/* HERO SPLIT */}
        <section className={styles.splitHero}>
          <p className={styles.splitHeroText}>
            These rankings reflect collective trust — curated by the ESPA community.
            Vote on trusted sites or submit one of your own to support a safer internet.
          </p>
        </section>

        {/* TOP: Pie Chart */}
        <section className={styles.chartSection}>
          <VotingComponent />
        </section>

       

        {/* The list + submission are already inside VotingComponent */}

      </main>
    </Layout>
  );
}





