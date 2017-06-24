import React from 'react';
import PropTypes from "prop-types";
import CatListRow from './CatListRow';

const CatList = ({cats}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {cats.map(cat =>
          <CatListRow key={cat.id} cat={cat} />
        )}
      </tbody>
    </table>
  );
};

CatList.propTypes = {
  cats: PropTypes.array.isRequired
};

export default CatList;
