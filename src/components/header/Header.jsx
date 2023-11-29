import React from "react";
import { UisHouseUser } from '@iconscout/react-unicons-solid'
import "./header.css";


const Header = () => {
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Smith
        </a>

        <div className="nav__menu">
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="" className="nav__link">
                <UisHouseUser className=" nav__icon"/>Home
              </a>
            </li>

            <li className="nav__item">
              <a href="" className="nav__link">
                <i className="uil uil- nav__icon"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="" className="nav__link">
                <i className="uil uil- nav__icon"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="" className="nav__link">
                <i className="uil uil- nav__icon"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="" className="nav__link">
                <i className="uil uil- nav__icon"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
