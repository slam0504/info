import React from "react"

const LightboxReact = ({
  mainSrc,
  nextSrc,
  prevSrc,
  onCloseRequest,
  onMovePrevRequest,
  onMoveNextRequest,
}) => {
  return (
    <div className="fixed inset-0 bg-opacity-75 bg-black">
      <div className="relative flex w-screen h-screen p-20">
        <div className="relative h-full flex-1 p-0 flex">
          <div
            className="absolute top-0 right-0 w-8 h-8 p-0
            text-center text-xl border-solid border-black border
            bg-white rounded-full cursor-pointer"
            onClick={onCloseRequest}>×</div>
          <img
            className="object-contain object-center max-h-full m-auto"
            src={mainSrc.image}
            alt={mainSrc.painter.name}
          />
          <div
            className="absolute left-0 w-8 h-8 p-0
            text-center text-xl border-solid border-black border
            bg-white rounded-full cursor-pointer transform -translate-y-1/2"
            style={{
              top: "50%"
            }}
            onClick={onMovePrevRequest}>◀</div>
          <div
            className="absolute right-0 w-8 h-8 p-0
            text-center text-xl border-solid border-black border
            bg-white rounded-full cursor-pointer transform -translate-y-1/2"
            style={{
              top: "50%"
            }}
            onClick={onMoveNextRequest}>►</div>
        </div>
      </div>
    </div>
  );
}

export default LightboxReact;
