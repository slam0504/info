import React, { useState } from 'react';
import LightBox from './Lightbox';
import GalleryCard from '../components/GalleryCard';
import galleryData from '../data/gallery-data';


const Gallery = ({ className }) => {
  const [showLightbox, setShowLightbox] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  const handleOpen = (i) => (e) => {
    setShowLightbox(true)
    setSelectedImage(i)
  }

  const handleClose = () => {
    setShowLightbox(false)
    setSelectedImage(null)
  }

  const handlePrevRequest = (i, length) => (e) => {
    setSelectedImage((i - 1 + length) % length)
  }

  const handleNextRequest = (i, length) => (e) => {
    setSelectedImage((i + 1) % length)
  }

  return (
    <div className={className}>
      {galleryData.map((gallery, i) => (
        <GalleryCard
          key={`gallery${i}`}
          index={i}
          className="flex-1 px-1 mb-5"
          gallery={gallery}
          handleOpen={handleOpen}
        />
      ))}
      {showLightbox && selectedImage !== null && (
        <LightBox
          images={galleryData}
          handleClose={handleClose}
          handleNextRequest={handleNextRequest}
          handlePrevRequest={handlePrevRequest}
          selectedImage={selectedImage}
        />
      )}
    </div>
  )
};

export default Gallery;
