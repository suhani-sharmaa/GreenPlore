import { motion } from 'framer-motion';
import React from 'react';
import savenature from '../images/savenature.png';
import marquee2 from '../images/marquee2.png';
import marquee3 from '../images/marquee3.png';
import marquee4 from '../images/marquee4.png';
import nature from '../images/nature.png';
import biodegradable from '../images/biodegradable.png';
import natural from '../images/natural.png';
import leaff from '../images/leaff.png';
import crueltyfree from '../images/crueltyfree.png';
import heart from '../images/heart.png'
import pure from '../images/pure.png'
import organic from '../images/organic.png'
import organic2 from '../images/organic2.png'
import earth from '../images/earth.png'
import eco from '../images/eco.png'
import recycle from '../images/recycle.png'

const images = [
  savenature, earth,marquee2, nature,organic2, natural,
  biodegradable,eco, marquee3, marquee4,recycle, leaff, crueltyfree,heart,pure,organic
];

const Marquee = () => {
  return (
    <div>
      <Header title="Our Ethos" />
      <MarqueeContainer>
        <MarqueeContent images={images} />
      </MarqueeContainer>
    </div>
  );
};

const Header = ({ title }) => (
  <h1
    className="text-7xl flex flex-col justify-center items-center bg-[#EDF1F1] pt-4 pb-4 text-[#1b4130]"
    style={{ fontFamily: 'Jacques Francois, serif' }}
  >
    {title}
  </h1>
);

const MarqueeContainer = ({ children }) => (
  <div className="w-full py-10 bg-[#1b4130] h-[20vh] overflow-hidden">
    <div className="h-[13vh] flex whitespace-nowrap relative">
      {children}
    </div>
  </div>
);

const MarqueeContent = ({ images }) => (
  <motion.div
    className="flex absolute"
    initial={{ x: 0 }}
    animate={{ x: '-100%' }}
    transition={{
      ease: 'linear',
      repeat: Infinity,
      duration: 20,
    }}
  >
    {images.concat(images).map((src, index) => (
      <MarqueeImage key={index} src={src} alt={`Marquee Image ${index + 1}`} />
    ))}
  </motion.div>
);

const MarqueeImage = ({ src, alt }) => (
  <img
    className="mx-5 w-[100px] h-[100px] -my-4"
    src={src}
    alt={alt}
  />
);

export default Marquee;
