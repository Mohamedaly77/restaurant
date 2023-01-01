import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import {
  BsArrowRightShort,
  BsArrowLeftShort,
  BsInstagram,
} from 'react-icons/bs';

import './Gallery.css';

const Gallery = () => {
  const scrollref = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollref;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  const galleryImages = [
    images.gallery01,
    images.gallery02,
    images.gallery03,
    images.gallery04,
  ];
  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: '#aaa', marginTop: '2rem' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          impedit deseru
        </p>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollref}>
          {galleryImages.map((image, index) => (
            <div
              className="app__gallery-images_cards flex__center"
              key={`gallery image-${index + 1}`}
            >
              {' '}
              <img src={image} alt="gallery" />
              <BsInstagram className="gallry_image-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery-arrow_icon"
            onClick={() => scroll('left')}
          />
          <BsArrowRightShort
            className="gallery-arrow_icon"
            onClick={() => scroll('right')}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
