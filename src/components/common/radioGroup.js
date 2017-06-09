import React, {PropTypes} from 'react';

const RadioGroup = ({label, cusineTypes, handleChange}) => (
  <div className="field">
     <div>
       <label>{label}</label>
        {cusineTypes.map((cusineType, i) => <input type="radio" name="cusineType" value={cusineType} key={i}>{cusineType}</input>)}
     </div>
   </div>
);

RadioGroup.propTypes = {
label: PropTypes.string,
cusineTypes: PropTypes.array.isRequired,
handleChange: PropTypes.func
};

RadioGroup.defaultProps = {
  label: "Select The Cusine",
  cusineTypes: ["Indian", "Chineese"]
};

export default RadioGroup;
