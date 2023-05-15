// Navigation.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav style={styles.nav}>
    <ul style={styles.navList}>
      <li style={styles.navItem}>
        <Link to="/" style={styles.navLink}>Home</Link>
      </li>
      <li style={styles.navItem}>
        <Link to="/reservation" style={styles.navLink}>Reservation</Link>
      </li>
    </ul>
  </nav>
);

const styles = {
  nav: {
    backgroundColor: '#f2f2f2',
    padding: '10px',
  },
  navList: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
  },
  navItem: {
    margin: '0 10px',
  },
  navLink: {
    color: '#333',
    textDecoration: 'none',
  },
};

export default Navigation;
