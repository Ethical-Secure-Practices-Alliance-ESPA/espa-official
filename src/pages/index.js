import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="Home"
      description="Ethical & Secure Practices Alliance – guidance for ethical, secure, and responsible internet usage."
    >
      <main>

        {/* Hero Section */}
        <section className="espa-hero">
          <h1>Welcome to E.S.P.A.</h1>
          <p>
            Your community-driven guide for ethical behavior online and practical home PC security.
          </p>
        </section>

        {/* Mission */}
        <section style={{ padding: '3rem 1rem', maxWidth: '960px', margin: '0 auto' }}>
          <h2>Our Mission</h2>
          <p>
            Ethical & Secure Practices Alliance (E.S.P.A.) empowers individuals and organizations
            to take proactive steps toward internet safety, responsible digital behavior,
            and home computer security. We provide actionable guidance on privacy, DNS security,
            trustworthy online sources, and ethical decision-making online.
          </p>
        </section>

        {/* Core Principles */}
        <section style={{ background: '#f5f5f5', padding: '3rem 1rem' }}>
          <div style={{ maxWidth: '960px', margin: '0 auto' }}>
            <h2>Core Principles</h2>

            <ul>
              <li>
                <strong>Privacy & Trust:</strong> Understand what data you share and which sites and services you can trust.
              </li>
              <li>
                <strong>Ethical Online Behavior:</strong> Promote honesty, respect, and accountability in digital spaces.
              </li>
              <li>
                <strong>Proactive Security:</strong> Protect your devices, home network, and DNS from potential threats.
              </li>
              <li>
                <strong>Community-Driven Guidance:</strong> Learn from peers, share experiences, and collectively improve safe online practices.
              </li>
            </ul>
          </div>
        </section>

        {/* Who We Serve */}
        <section style={{ padding: '3rem 1rem', maxWidth: '960px', margin: '0 auto' }}>
          <h2>Who ESPA Serves</h2>

          <h3>Home Users & Families</h3>
          <p>
            Practical, non-technical guidance for securing personal devices, safely navigating the internet,
            and making informed choices about the sites and services you use.
          </p>

          <h3>NGOs & Organizations</h3>
          <p>
            Governance-aware documentation to support ethical online policies, internal security culture,
            and responsible digital behavior.
          </p>

          <p>
            ESPA provides <strong>general guidance only</strong>. Always follow your organization’s official policies and directives.
          </p>
        </section>

        {/* Call to Action */}
        <section style={{ padding: '3rem 1rem', textAlign: 'center', background: '#333', color: '#fff' }}>
          <h2>Explore Our Guides</h2>
          <p style={{ maxWidth: '720px', margin: '1rem auto' }}>
            All public guides are freely accessible. Supporter-funded advanced guides help sustain ESPA’s mission.
          </p>

          <Link
            className="button button--primary"
            to="/docs/Governance/governance"
          >
            View Documentation
          </Link>
        </section>

      </main>
    </Layout>
  );
}


