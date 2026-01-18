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
        Your trusted guide for ethical, secure, and responsible internet usage.
      </p>
      </section>


        {/* Mission */}
        <section style={{ padding: '3rem 1rem', maxWidth: '960px', margin: '0 auto' }}>
          <h2>Our Mission</h2>
          <p>
            Ethical & Secure Practices Alliance (E.S.P.A.) provides clear, neutral,
            and accessible guidance to help individuals and organizations make
            informed decisions about privacy, security, and responsible online behavior.
          </p>
        </section>

        {/* Core Principles */}
        <section style={{ background: '#f5f5f5', padding: '3rem 1rem' }}>
          <div style={{ maxWidth: '960px', margin: '0 auto' }}>
            <h2>Core Principles</h2>

            <ul>
              <li>
                <strong>Privacy First:</strong> Minimize data exposure and understand how information is used online.
              </li>
              <li>
                <strong>Ethical Behavior:</strong> Respect digital rights, autonomy, and public-interest values.
              </li>
              <li>
                <strong>Security Awareness:</strong> Learn practical steps to protect accounts, devices, and communications.
              </li>
            </ul>
          </div>
        </section>

        {/* Who We Serve */}
        <section style={{ padding: '3rem 1rem', maxWidth: '960px', margin: '0 auto' }}>
          <h2>Who ESPA Serves</h2>

          <h3>Home Users</h3>
          <p>
            Clear, non-technical guidance for safer everyday internet use,
            privacy protection, and informed decision-making.
          </p>

          <h3>NGOs & Organizations</h3>
          <p>
            Governance-aware documentation designed to support ethical practices,
            internal policy alignment, and responsible security culture.
          </p>

          <p>
            ESPA provides <strong>general guidance only</strong>. Employees and
            members must always follow their organization’s official policies
            and directives.
          </p>
        </section>

        {/* Call to Action */}
        <section style={{ padding: '3rem 1rem', textAlign: 'center', background: '#333', color: '#fff' }}>
          <h2>Explore the Documentation</h2>
          <p style={{ maxWidth: '720px', margin: '1rem auto' }}>
            All public guides are freely accessible. Supporter-funded advanced
            guides help sustain ESPA’s mission.
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

