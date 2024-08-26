import React from 'react';
import { Carousel } from 'react-bootstrap';
import tubeplanters from '../images/tubeplanters.png';
import leaf from '../images/leaf.png';

function ImageSlider() {
  return (
    <div className="relative mx-auto mt-4 h-[70vh] w-[90vw] bg-[#C2D2CA]">
      <Carousel className="relative h-full w-full">
      <Carousel.Item>
          <div className="relative flex items-center justify-end h-full w-full">
           <a href='/#' className="max-w-[50%] max-h-[70%] object-cover mt-5 cursor-pointer"> <img
              src={tubeplanters}
              className="w-[43vw]"
              alt="First slide"
            /></a>
            <Carousel.Caption className=" flex flex-wrap w-[10vw] top-[23vh] left-[20vw] text-6xl tracking-wide text-black " style={{fontFamily:'Jacques Francois, serif',lineHeight:1.2}}>
             <a href='/#' className="cursor-pointer"> Test Tube HYDROPONIC planters</a>
            </Carousel.Caption>

          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="relative flex items-center justify-end h-full w-full">
           <a href='/#' className="max-w-[50%] max-h-[70%] object-cover mt-5 cursor-pointer"> <img
              src={tubeplanters}
              className="w-[43vw]"
              alt="First slide"
            /></a>
            <Carousel.Caption className=" flex flex-wrap w-[10vw] top-[23vh] left-[20vw] text-6xl tracking-wide text-black " style={{fontFamily:'Jacques Francois, serif',lineHeight:1.2}}>
             <a href='/#' className="cursor-pointer"> Test Tube HYDROPONIC planters</a>
            </Carousel.Caption>

          </div>
        </Carousel.Item><Carousel.Item>
          <div className="relative flex items-center justify-end h-full w-full">
           <a href='/#' className="max-w-[50%] max-h-[70%] object-cover mt-5 cursor-pointer"> <img
              src={tubeplanters}
              className="w-[43vw]"
              alt="First slide"
            /></a>
            <Carousel.Caption className=" flex flex-wrap w-[10vw] top-[23vh] left-[20vw] text-6xl tracking-wide text-black " style={{fontFamily:'Jacques Francois, serif',lineHeight:1.2}}>
             <a href='/#' className="cursor-pointer"> Test Tube HYDROPONIC planters</a>
            </Carousel.Caption>

          </div>
        </Carousel.Item><Carousel.Item>
          <div className="relative flex items-center justify-end h-full w-full">
           <a href='/#' className="max-w-[50%] max-h-[70%] object-cover mt-5 cursor-pointer"> <img
              src={tubeplanters}
              className="w-[43vw]"
              alt="First slide"
            /></a>
            <Carousel.Caption className=" flex flex-wrap w-[10vw] top-[23vh] left-[20vw] text-6xl tracking-wide text-black " style={{fontFamily:'Jacques Francois, serif',lineHeight:1.2}}>
             <a href='/#' className="cursor-pointer"> Test Tube HYDROPONIC planters</a>
            </Carousel.Caption>

          </div>
        </Carousel.Item>
      </Carousel>
      <img
        src={leaf}
        className="absolute bottom-0 left-0 w-[17vw] h-auto"
        alt="Leaf decoration"
      />
    </div>
  );
}

export default ImageSlider;
