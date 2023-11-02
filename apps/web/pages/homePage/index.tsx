import React from 'react';
import Link from 'next/link';
import type { CSSProperties } from "react";
import styles from './CenteredButton.module.css';


const HomePage: React.FC = () => {
  return (
    <div style={
        {
          "--cal-brand": "#111827",
          "--cal-brand-emphasis": "#101010",
          "--cal-brand-text": "white",
          "--cal-brand-subtle": "#9CA3AF",
        } as CSSProperties
      }>
      <div className={styles.container}>
        <button className={styles.button}><Link href="/event-types">My Schedule</Link></button>
        </div>
    </div>
  );
};

export default HomePage;