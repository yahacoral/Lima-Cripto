import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

export default function ImageSlider({imageArray}){
 
  return (
    <>
        <Carousel fade>
            {imageArray.map((image) => (
                <Carousel.Item interval={1500}>
                <img
                className="d-block w-100"
                src={image.url}
                alt={image.alt}
                />
            </Carousel.Item>
            ))}
        </Carousel>
    </>
  )
}
