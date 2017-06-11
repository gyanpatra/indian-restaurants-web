import React, {PropTypes} from 'react';

const SelectBox = ({label, milesOptions, handleChange}) => (
  <div className="col-lg-2">
       <label>{label}</label>
       <select name="milesSelector">
          {milesOptions.map((mileOption, i) => <option value={mileOption} key={i}>{mileOption}</option>)}
       </select>
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
