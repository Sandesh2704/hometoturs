
import React from "react";

export default function Button({ title, bgGreen, roundedfull }) {
  return (
    <div
      className={`px-5 py-3 text-base font-medium w-fit
      ${bgGreen ? "bg-primary text-black" : "bg-secondary text-white"}
      ${roundedfull ? "rounded-full" : "rounded-lg"}`}
    >
      {title}
    </div>
  );
}
