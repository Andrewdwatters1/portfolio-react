import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


class About extends Component {
  constructor() {
    super()
    this.state = {
      carouselIndex: 0
    }
  }

  onChange() {
    this.setState({
      courselIndex: ++this.state.courselIndex
    })
  }
  render() {
    return (
      <div className="about-container">
        <h1>ABOUT ME</h1>
        <p className="about-content">I am an enthusiastic leader with a passion for learning and self-development. I love working with small teams to find innovative and performant solutions to complex problems.  I currently serve in the Colorado Army National Guard as the Operations Officer for a High Mobility Artillery Rocket Systems unit.  In my downtime, I enjoy weightlifting, hiking and camping with my wife Lauren and our pooch, Miso. I'm a lifelong Denver Broncos and Chelsea FC fan, and I enjoy photography and being in nature. </p>
          <Carousel showArrows={true} autoPlay showStatus={false} infiniteLoop={true} stopOnHover={true} swipeable={true}>
            <div>
              <img src={require("../images_final/family.jpg")} />
              <p className="legend">Legend 1</p>
            </div>
            <div>
              <img src={require("../images_final/army2.jpg")} />
              <p className="legend">Legend 1</p>
            </div>
            <div>
              <img src={require("../images_final/spain.jpg")} />
              <p className="legend">Legend 1</p>
            </div>
            <div>
              <img src={require("../images_final/outdoors.jpg")} />
              <p className="legend">Legend 1</p>
            </div>
            <div>
              <img src={require("../images_final/miso.jpg")} />
              <p className="legend">Legend 1</p>
            </div>
          </Carousel>
      </div>
    )
  }
}

export default About;