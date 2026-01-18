import React, { useState, useEffect } from 'react';

/**
 * Wraps supporter-only content.
 * - children: content to display if access is granted
 * - tokenKey: optional localStorage key for token validation
 */
export default function SupporterTokenGate({ children, tokenKey = 'espa_supporter_token' }) {
  const [hasAccess, setHasAccess] = useState(false);

  useEffect(() => {
    // Placeholder logic for future token check
    const token = localStorage.getItem(tokenKey);
    if (token === 'VALID_TOKEN') setHasAccess(true);
  }, [tokenKey]);

  if (!hasAccess) {
    return (
      <div
        style={{
          border: '2px dashed #1976d2',
          backgroundColor: '#e3f2fd',
          padding: '16px',
          borderRadius: '8px',
          margin: '16px 0',
          textAlign: 'center',
          fontSize: '1rem',
        }}
      >
        <strong>Supporter Access Only</strong>
        <p>
          This guide is available to ESPA supporters. Your support funds hosting, maintenance,
          and future projects.
        </p>
      </div>
    );
  }

  return <>{children}</>;
}
