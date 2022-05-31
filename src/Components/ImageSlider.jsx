import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

export default function ImageSlider() {
 
  return (
    <>
        <Carousel>
            <Carousel.Item interval={1500}>
                <img
                className="d-block w-100"
                src="https://res.cloudinary.com/dubbcjkfa/image/upload/v1654012743/Lima-Cripto/lima-cripto-min_lelya4.jpg"
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={1500}>
                <img
                className="d-block w-100"
                src="https://res.cloudinary.com/dubbcjkfa/image/upload/v1654012733/Lima-Cripto/lima-cripto-2-min_zq8fwg.jpg"
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={1500}>
                <img
                className="d-block w-100"
                src="https://res.cloudinary.com/dubbcjkfa/image/upload/v1654012740/Lima-Cripto/lima-cripto-3-min_fwcv7a.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={1500}>
                <img
                className="d-block w-100"
                src="https://res.cloudinary.com/dubbcjkfa/image/upload/v1654012742/Lima-Cripto/lima-cripto-4-min_mgc93y.jpg"
                alt="Four slide"
                />
            </Carousel.Item>
        </Carousel>
    </>
  )
}
