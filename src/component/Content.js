import React from 'react';
import img from '../img/ar3.jpg'
import img1 from '../img/ar2.jpg';
import img2 from '../img/ar1.jpg'
import img3 from '../img/bg0.jpg'
import { Link } from 'react-router-dom';
function Content(props) {
  return (
    <>
    <div className='content max-width-1 m-auto'>
      <div className="content-left">
        <h1>this is for blogger</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio atque odio tempora, ratione accusantium similique omnis doloribus corporis neque ad, necessitatibus odit sed consectetur. Fuga accusamus saepe alias fugiat explicabo maiores nostrum culpa inventore? </p>
      </div>
      <div className="content-right">
        <img src={img1} alt="iblog" />
      </div>
    </div>
    <div className="max-width-1 m-auto"><hr /></div>
    <div className="home-articles max-width-1 m-auto font2">
      <div className="year-box">
        <h3>Year</h3>
        <div>
          <input type="radio"  name="year"/>2022
        </div>
        <div>
          <input type="radio"  name="year"/>2023
        </div>
      </div>
      <h2>{props.topic}</h2>
      <div className="home-article">
        <div className="home-article-img">
        <img src={img} alt="article" />
        </div>
        <div className="home-article-content">
          <Link to='/blogpost'><h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3></Link>
          <div>Author Name</div>
          <span>07 Januvry | 6:30pm</span>
        </div>
      </div>
      <div className="home-article">
        <div className="home-article-img">
        <img src={img3} alt="article" />
        </div>
        <div className="home-article-content">
        <Link to='/blogpost'><h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3></Link>
          <div>Author Name</div>
          <span>07 Januvry | 6:30pm</span>
        </div>
      </div>
      <div className="home-article">
        <div className="home-article-img">
        <img src={img2} alt="article" />
        </div>
        <div className="home-article-content">
        <Link to='/blogpost'><h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3></Link>
          <div>Author Name</div>
          <span>07 Januvry | 6:30pm</span>
        </div>
      </div>
      <div className="home-article">
        <div className="home-article-img">
        <img src={img} alt="article" />
        </div>
        <div className="home-article-content">
        <Link to='/blogpost'><h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3></Link>
          <div>Author Name</div>
          <span>07 Januvry | 6:30pm</span>
        </div>
      </div>
    </div>
    </>
  )
}

export default Content
