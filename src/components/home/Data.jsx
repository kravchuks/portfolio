import React, { useState } from "react";

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">
        John Smith
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 22"
          fill="#000"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 0L16.0698 6.39837L23.4127 8.2918L18.5851 14.1396L19.0534 21.7082L12 18.924L4.94658 21.7082L5.41488 14.1396L0.587322 8.2918L7.93017 6.39837L12 0Z"
            fill="current"
          />
        </svg>
      </h1>

      <h3 className="home__subtitle">Visual Designer</h3>

      <p className="home__description">
        I`m creative designer based in New York, and I`m very passionate and
        dedicated to my work.
      </p>

      <a href="contact" className="button button--flex">
        Say Hello
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 15.6569V10M14 10H8.34315M14 10L5.63604 18.364M10.2432 20.8278C13.0904 21.3917 16.1575 20.5704 18.364 18.364C21.8787 14.8492 21.8787 9.15076 18.364 5.63604C14.8492 2.12132 9.15076 2.12132 5.63604 5.63604C3.42957 7.84251 2.60828 10.9096 3.17216 13.7568"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  );
};

export default Data;
