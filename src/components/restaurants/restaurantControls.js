import React, { Component } from 'react';
import SelectBox from '../common/selectBox';
import RadioGroup from '../common/radioGroup';


const RestaurantControls = () => (
  <div className="row rest-control">
    <RadioGroup />
    <SelectBox />
  </div>
);

export default RestaurantControls;
