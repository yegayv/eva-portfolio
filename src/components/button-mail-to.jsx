"use client";
import React from "react";

const ButtonMailto = ({ mailto, label, className }) => {
  return (
    <button
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }}
      className={`relative inline-flex justify-center items-center gap-x-3 text-center border-black border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-green-100 focus:ring-offset-2 focus:ring-offset-white transition h-[50px] ${className}`}
    >
      <span className="z-10 text-black border-black/20 border w-full h-full rounded-[inherit] flex justify-center items-center">
        {label}
      </span>
    </button>
  );
};

export default ButtonMailto;
