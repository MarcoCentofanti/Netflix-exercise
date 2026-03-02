import { useEffect, useState } from "react";
import Logo from "../assets/img/Netflix_2015_logo.svg.png";

export default function Navbar({ uiData, handleSearch, inputSearch }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-black">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img className="navbar-logo" src={Logo} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 my-fs-navbar">
            {uiData.map((element, index) => {
              return (
                <li key={index} className="nav-item">
                  <a
                    className="nav-link"
                    aria-current="page"
                    href={element.link}
                  >
                    {element.name}
                  </a>
                </li>
              );
            })}
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              name=""
              value={inputSearch}
              onChange={handleSearch}
              placeholder="Cerca"
              aria-label="Search"
            />
            <button className="btn btn-outline-danger" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
