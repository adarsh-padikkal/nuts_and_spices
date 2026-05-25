import React from 'react';

const Logo = ({ className = "brand-logo" }) => {
  return (
    <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="logo-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFDF73"/>
          <stop offset="100%" stop-color="#E6B325"/>
        </linearGradient>
      </defs>
      {/* Background container that morphs based on theme CSS variables */}
      <rect width="256" height="256" rx="64" fill="var(--logo-bg, #16181D)"/>
      <g transform="translate(28, 28) scale(0.78)">
        <path d="M128,40 C128,40 190,90 190,150 C190,185 160,210 128,210 C96,210 66,185 66,150 C66,90 128,40 128,40 Z" fill="url(#logo-gold)"/>
        {/* Veins of the leaf cut out to show the background color */}
        <path d="M128,40 L128,210" stroke="var(--logo-bg, #16181D)" strokeWidth="12" strokeLinecap="round"/>
        <path d="M128,100 Q160,80 170,110" stroke="var(--logo-bg, #16181D)" strokeWidth="12" strokeLinecap="round" fill="none"/>
        <path d="M128,150 Q170,130 180,160" stroke="var(--logo-bg, #16181D)" strokeWidth="12" strokeLinecap="round" fill="none"/>
      </g>
    </svg>
  );
};

export default Logo;
