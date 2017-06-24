import React from 'react';
import PropTypes from "prop-types";
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <div className="header-row">
      <div className="row">
        <h1 className="headerTitle col">Foodies Recommend !!! </h1>
      </div>
      <div className="row">
        <nav className="navMenu col">
          <IndexLink to="/" activeClassName="active">Home</IndexLink>
          {" | "}
          <Link to="/about" activeClassName="active">WHO ARE WE?</Link>
        </nav>
      </div>
    </div>

  );
};

export default Header;
