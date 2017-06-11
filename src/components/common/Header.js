import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <div className="row">
      <h1 className="headerTitle col">Foodies Recommend !!! </h1>
      <nav className="navMenu col">
        <IndexLink to="/" activeClassName="active">Home</IndexLink>
        {" | "}
        <Link to="/about" activeClassName="active">WHO ARE WE?</Link>
      </nav>

    </div>
  );
};

export default Header;
