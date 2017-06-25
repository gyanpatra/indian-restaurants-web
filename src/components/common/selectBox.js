import React from 'react';
import PropTypes from "prop-types";

const SelectBox = ({label, milesOptions, handleChange}) => (
  <div className="col-lg-6 col-sm-12 ">
    <div className="text-center">
       <label className="mile-selector-label">{label}</label>
       <select name="milesSelector" className="custom-select">
          {milesOptions.map((mileOption, i) => <option value={mileOption} key={i}>{mileOption}</option>)}
       </select>
    </div>
   </div>
);




SelectBox.propTypes = {
label: PropTypes.string,
milesOptions: PropTypes.array.isRequired,
handleChange: PropTypes.func
};

SelectBox.defaultProps = {
  label: "Select The Radius",
  milesOptions: [5,10,50,100]
};

export default SelectBox;
