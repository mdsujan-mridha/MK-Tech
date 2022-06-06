import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Curosel.css';
const Curosel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className=" curosel-img w-100"
          src="https://i.ibb.co/SmHTdDG/product-10.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3> Sennheiser  </h3>
          <p> Sennheiser is a reputed brand among audiophiles for their wide range of open-back headphones at various price points. </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="curosel-img d-block w-100"
          src="https://i.ibb.co/6DwnmHY/product-5.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3> Audio-Technica </h3>
          <p> This lineup includes many options, and it's not always obvious which provides the best value for the price. </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="curosel-img d-block w-100"
          src="https://i.ibb.co/3YbvJnf/product-3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3> Beyerdynamic </h3>
          <p>
          Beyerdynamic is one of the oldest headphone manufacturers and are the inventors of the first dynamic transducer headphones. 
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

        </div>
    );
};

export default Curosel;