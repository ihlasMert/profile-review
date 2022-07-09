import React, { useState } from "react";

import people from "./data";
import { FaQuoteRight, FaChevronRight, FaChevronLeft } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const nextPerson = () => {
    setIndex(() => {
        let newIndex = index + 1;
        return newIndex
    });
  };
  const prevPerson = () => {
    setIndex(() => {
        let newIndex = index - 1;
        return newIndex
    });
  };

  console.log(people);
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name} </h4>
      <p className="info">{job}</p>
      <p className="info">{text}</p>
      <div className="butto-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn">suprise me</button>
    </article>
  );
};

export default Review;
