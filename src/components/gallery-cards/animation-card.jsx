import React from "react";

const AnimationCard = ({ animation }) => {
  return (
    <div className="flex h-[740px] max-w-4xl gap-12 hover:scale-[1.05] transition-all">
      <div className="h-full w-full flex flex-col justify-between gap-6">
        <div className="w-[600px] flex flex-col gap-3">
          <h2 className="text-6xl">{animation.title}</h2>
        </div>
        <div className="">
          <iframe
            width="1080"
            height="640"
            src={animation.videoSource}
            title={animation.title}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default AnimationCard;
