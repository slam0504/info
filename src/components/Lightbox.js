import React from "react"
import LightboxReact from './LightboxReact'

const Lightbox = ({
  images,
  selectedImage,
  handleClose,
  handlePrevRequest,
  handleNextRequest,
}) => {
  return (
    <LightboxReact
      mainSrc={images[selectedImage]}
      onCloseRequest={handleClose}
      onMovePrevRequest={handlePrevRequest(selectedImage, images.length)}
      onMoveNextRequest={handleNextRequest(selectedImage, images.length)}
    />
  )
}

export default Lightbox;
