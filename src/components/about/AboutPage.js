import React from 'react';

class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Who Are We ?</h1>
        <div className="foodiesImages">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4iNfJ7sFaOhH297Uv5uWR7x2yI32BUf3EQXikd6egiXgjlDoeww" className="foodiesImage"/>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmE2lI3MdI9fLrK0NeCehM1vmqh7E_P2zQ6b_Zp1Cc08x1zyhsqg" className="foodiesImage"/>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr1VX4zy2nkbLoRYN-EUKpaxz4WvoOmR0WwO4NWGfcU5yhQ1w1" className="foodiesImage"/>
        </div>
        <p className="aboutWebsite">We are foodies. Who like to try and taste different restaurants. We review them by food item</p>
      </div>
    );
  }
}

export default AboutPage;
