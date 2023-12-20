import React, { useState } from "react";

const ScrollDown = () => {
  return (
    <div className="home__scroll">
      <a href="about" className="home__scroll-button button--flex">
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="30"
            width="30"
            height="30"
            rx="15"
            transform="rotate(90 30 0)"
            fill="#E4E4E4"
          />
          <path
            d="M14.608 9.416L16.144 9.416L16.144 17.064L19.104 13.496L20.304 14.488L15.376 20.168L10.432 14.488L11.648 13.496L14.608 17.064L14.608 9.416Z"
            fill="#AFB1B5"
          />
        </svg>

        <span className="home__scroll-name">Scroll Down</span>

        <i className="uil uil-arrow-down home__scroll-arorw"></i>
      </a>
    </div>
  );
};

export default ScrollDown;
