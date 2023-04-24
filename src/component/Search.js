import React from "react";
import img2 from "../img/ar1.jpg";
import img from '../img/ar3.jpg'
import img1 from '../img/ar2.jpg';
import img3 from '../img/bg0.jpg'
import { Link } from "react-router-dom";
function Search() {
  return (
    <div>
      <div className="home-articles max-width-1 m-auto font2">
        <div className="year-box adjust-year">
          <h3>Year</h3>
          <div>
            <input type="radio" name="year" />
            2022
          </div>
          <div>
            <input type="radio" name="year" />
            2023
          </div>
        </div>
          <h2>Search Reasult for Django (0.03 seconds)</h2>
          <div className="home-article">
          <div className="home-article-img">
            <img src={img} alt="article" />
          </div>
          <div className="home-article-content">
            <Link to="/blogpost">
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
            </Link>
            <span>Author Name</span>
            <span>07 Januvry | 6:30pm</span>
            span
          </div>
        </div>
        <div className="home-article">
          <div className="home-article-img">
            <img src={img1} alt="article" />
          </div>
          <div className="home-article-content">
            <Link to="/blogpost">
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
            </Link>
            <span>Author Name</span>
            <span>07 Januvry | 6:30pm</span>
            span
          </div>
        </div>
        <div className="home-article">
          <div className="home-article-img">
            <img src={img3} alt="article" />
          </div>
          <div className="home-article-content">
            <Link to="/blogpost">
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
            </Link>
            <span>Author Name</span>
            <span>07 Januvry | 6:30pm</span>
            span
          </div>
        </div>
        <div className="home-article">
          <div className="home-article-img">
            <img src={img2} alt="article" />
          </div>
          <div className="home-article-content">
            <Link to="/blogpost">
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
            </Link>
            <span>Author Name</span>
            <span>07 Januvry | 6:30pm</span>
            span
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
