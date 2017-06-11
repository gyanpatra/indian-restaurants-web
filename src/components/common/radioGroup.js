import React, {PropTypes} from 'react';

const RadioGroup = ({label, cusineTypes, handleChange}) => (
  <div className="col-lg-2">
       <label className="radioLabel">{label}</label>
        {cusineTypes.map((cusineType, i) => {
          let checked = "false";
          if( i == 0) {
            checked = "checked";
          }
          return (
            <div key={i}>
              <input type="radio" className="radioButton" name="cusineType" checked={checked} value={cusineType} key={i}>{cusineType}</input>
              <br />
            </div>
          );
        }
      )}
  </div>
);

RadioGroup.propTypes = {
label: PropTypes.string,
cusineTypes: PropTypes.array.isRequired,
handleChange: PropTypes.func
};

RadioGroup.defaultProps = {
  label: "Select The Cusine",
  cusineTypes: ["Chinese", "Indian"]
};

export default RadioGroup;
