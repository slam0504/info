import React, { useState } from 'react';
import GalleryCardAlt from '../components/GalleryCardAlt';
import galleryData from '../data/gallery-data';
import Fancybox from "./Fancybox";


const GalleryAlt = ({ className }) => (
  <Fancybox>
    <div className={className}>
      {galleryData.map((gallery, i) => (
        <GalleryCardAlt
          key={`gallery${i}`}
          index={i}
          className="flex-1 px-1 mb-5"
          gallery={gallery}
        />
      ))}
    </div>
  </Fancybox>
);

export default GalleryAlt;
