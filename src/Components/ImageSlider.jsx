import React from 'react';
import styles from '../styles.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Image1 from "../Assets/Img/lima-cripto.jpeg";
import Image2 from "../Assets/Img/lima-cripto-2.jpeg";
import Image3 from "../Assets/Img/lima-cripto-3.jpeg";
import Image4 from "../Assets/Img/lima-cripto-4.jpeg";

export default function ImageSlider() {
 
  return (
    <>
        <Carousel>
            <Carousel.Item interval={1500}>
                <img
                className="d-block w-100"
                src={Image1}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={1500}>
                <img
                className="d-block w-100"
                src={Image2}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={1500}>
                <img
                className="d-block w-100"
                src={Image3}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={1500}>
                <img
                className="d-block w-100"
                src={Image4}
                alt="Four slide"
                />
            </Carousel.Item>
        </Carousel>
    </>
  )
}
