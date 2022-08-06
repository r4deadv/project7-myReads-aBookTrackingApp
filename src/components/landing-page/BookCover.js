import React from "react";

function BookCover({ imgLink }) {
  return (
    <div
      className="book-cover"
      style={{
        width: 128,
        height: 193,
        backgroundImage: `url(${imgLink})`,
      }}
    ></div>
  );
}

export default BookCover;
