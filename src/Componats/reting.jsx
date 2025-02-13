import React from "react";
import { FiStar } from "react-icons/fi";
import { GoStarFill } from "react-icons/go";

const Rating = ({ reting, onClick }) => {
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <span
          onClick={() => onClick(i)}
          key={i}
          className="text-yellow-500 text-lg "
        >
          {reting > i ? <GoStarFill className=" scale-105" /> : <FiStar />}
        </span>
      ))}
    </>
  );
};

export default Rating;
