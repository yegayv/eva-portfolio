import React from "react";

const SketchbookCard = ({ sketchbook }) => {
  return (
    <div className="flex h-[740px] w-full mx-auto">
      <iframe
        src="https://heyzine.com/flip-book/b189f63fae.html"
        width="100%"
        height="680"
        seamless="seamless"
        frameborder="0"
        allowFullScreen
        allow="autoplay; clipboard-read; clipboard-write"
        className="rounded-lg"
      ></iframe>
    </div>
  );
};

export default SketchbookCard;
