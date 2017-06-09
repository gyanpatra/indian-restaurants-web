import React from 'react';
import {Link} from 'react-router';
import ReactGeoLocation from 'react-geo-location';
import SelectBox from '../common/selectBox';
import RadioGroup from '../common/radioGroup';
import Restaurants from '../restaurants/restaurants';

class HomePage extends React.Component {
  render() {
    const milesOptions = [5,10,50,100]
    return (
      <div className="jumbotron">

        <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
        <SelectBox milesOptions={milesOptions} />
        <RadioGroup />
        <Restaurants />
        <ReactGeoLocation>HI</ReactGeoLocation>
      </div>
    );
  }
}





export default HomePage;
