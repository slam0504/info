import React, { useState } from 'react';
import GalleryCard from '../components/GalleryCard';
import galleryData from '../data/gallery-data';
import Fancybox from "./Fancybox";


const Gallery = ({ className }) => (
  <Fancybox>
    <div className={className}>
      {galleryData.map((gallery, i) => (
        <GalleryCard
          key={`gallery${i}`}
          index={i}
          className="flex-1 px-1 mb-5"
          gallery={gallery}
        />
      ))}
    </div>
  </Fancybox>
);

export default Gallery;
