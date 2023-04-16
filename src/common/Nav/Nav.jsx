import React from 'react';
import { Link } from 'react-router-dom';
import { styles } from './style';

const Nav = () => {
  return (
    <div className={styles}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
