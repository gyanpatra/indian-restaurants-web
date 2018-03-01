import React from 'react';
import PropTypes from "prop-types";

const RadioGroup = ({label, cusineTypes, handleChange}) => (
  <div className="col-lg-6 col-lg-offset-3 col-sm-12">

      <div className="custom-controls-stacked align-items-center">
        <div className="align-items-center">
        <label className="custom-control custom-radio">
              <input id="cusineType" name="cusineType" type="radio" disabled={true} checked={false} value="Chinese" className="custom-control-input" />
              <span className="custom-control-indicator"></span>
              <span className="custom-control-description">Chinese</span>
        </label>
        <label className="custom-control custom-radio">
              <input id="cusineType" name="cusineType" type="radio" checked={true} value="Indian" className="custom-control-input" />
              <span className="custom-control-indicator"></span>
              <span className="custom-control-description">Indian</span>
        </label>
      </div>
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
  cusineTypes: ["Chinese", "Indian"]
};

export default RadioGroup;
