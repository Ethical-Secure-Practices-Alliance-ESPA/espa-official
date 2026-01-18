import React from 'react';
import PropTypes from 'prop-types';
import './TooltipBox.module.css'; // make sure this file contains your tooltip CSS

/**
 * TooltipBox component for domain-colored tooltips
 * Automatically sets the data-domain attribute for styling
 *
 * Props:
 * - title: string, title shown at top of tooltip
 * - domain: string, one of 'iam', 'network', 'data', 'ethics'
 * - children: tooltip content
 */
export default function TooltipBox({ title, domain, children }) {
  const allowedDomains = ['iam', 'network', 'data', 'ethics'];

  // fallback to 'iam' if domain is invalid
  const tooltipDomain = allowedDomains.includes(domain) ? domain : 'iam';

  return (
    <div className="tooltipBox" data-domain={tooltipDomain}>
      {title && <strong>{title}</strong>}
      <div>{children}</div>
    </div>
  );
}

TooltipBox.propTypes = {
  title: PropTypes.string,
  domain: PropTypes.oneOf(['iam', 'network', 'data', 'ethics']),
  children: PropTypes.node.isRequired,
};


