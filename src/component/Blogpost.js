import React from 'react'
import img from '../img/ar3.jpg'
import img2 from '../img/ar1.jpg'
import img1 from '../img/ar2.jpg'
import img3 from '../img/bg0.jpg'
import { Link } from 'react-router-dom';
function Blogpost() {
  return (
    <div>
      <div className="post-img">
        <img src={img} alt="" />
      </div>
          <div className="m-auto blog-post-content max-width-2 my-2">
            <h1 className='font1'>The heaven for bloggers</h1>
            <div className="blogpost-meta">
              <div className="author-info">
                <div>
                <b>
                By krishna das
                </b>  
                </div>
                <div>
                4 januavary. 6 min read
                </div>
              </div>
              <div className="social">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M20 5.34c-.67.41-1.4.7-2.18.87a3.45 3.45 0 0 0-5.02-.1 3.49 3.49 0 0 0-1.02 2.47c0 .28.03.54.07.8a9.91 9.91 0 0 1-7.17-3.66 3.9 3.9 0 0 0-.5 1.74 3.6 3.6 0 0 0 1.56 2.92 3.36 3.36 0 0 1-1.55-.44V10c0 1.67 1.2 3.08 2.8 3.42-.3.06-.6.1-.94.12l-.62-.06a3.5 3.5 0 0 0 3.24 2.43 7.34 7.34 0 0 1-4.36 1.49l-.81-.05a9.96 9.96 0 0 0 5.36 1.56c6.4 0 9.91-5.32 9.9-9.9v-.5c.69-.49 1.28-1.1 1.74-1.81-.63.3-1.3.48-2 .56A3.33 3.33 0 0 0 20 5.33" fill="#A8A8A8"></path></svg>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M19.75 12.04c0-4.3-3.47-7.79-7.75-7.79a7.77 7.77 0 0 0-5.9 12.84 7.77 7.77 0 0 0 4.69 2.63v-5.49h-1.9v-2.2h1.9v-1.62c0-1.88 1.14-2.9 2.8-2.9.8 0 1.49.06 1.69.08v1.97h-1.15c-.91 0-1.1.43-1.1 1.07v1.4h2.17l-.28 2.2h-1.88v5.52a7.77 7.77 0 0 0 6.7-7.71" fill="#A8A8A8"></path></svg>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M19.75 5.39v13.22a1.14 1.14 0 0 1-1.14 1.14H5.39a1.14 1.14 0 0 1-1.14-1.14V5.39a1.14 1.14 0 0 1 1.14-1.14h13.22a1.14 1.14 0 0 1 1.14 1.14zM8.81 10.18H6.53v7.3H8.8v-7.3zM9 7.67a1.31 1.31 0 0 0-1.3-1.32h-.04a1.32 1.32 0 0 0 0 2.64A1.31 1.31 0 0 0 9 7.71v-.04zm8.46 5.37c0-2.2-1.4-3.05-2.78-3.05a2.6 2.6 0 0 0-2.3 1.18h-.07v-1h-2.14v7.3h2.28V13.6a1.51 1.51 0 0 1 1.36-1.63h.09c.72 0 1.26.45 1.26 1.6v3.91h2.28l.02-4.43z" fill="#A8A8A8"></path></svg>
              </div>
            </div>
            <p className='font1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab nihil dolorem vel aliquam, non ipsum rem exercitationem porro, in magnam unde temporibus asperiores. Suscipit, a? Omnis consequatur ullam quidem? Nulla maiores maxime dolor officiis saepe obcaecati nesciunt deserunt ipsum, aperiam aliquam unde suscipit ducimus delectus animi perspiciatis aut dicta iusto, eligendi praesentium hic nihil laborum. Incidunt, eius unde maiores vero earum minus. Nam autem itaque ut, quia iusto quam quae ducimus? Non nam impedit expedita molestias aliquam labore libero! Aspernatur odit dolore distinctio officia, qui, quo ab deserunt esse mollitia beatae non quod. Voluptate autem culpa ea eos distinctio quisquam dolore assumenda voluptatem! Qui at numquam laboriosam corporis accusamus delectus, odio vel molestiae, vero, omnis eum ullam odit? Ea possimus dolores, temporibus deleniti libero sequi cum velit veniam soluta accusantium consequatur officia laboriosam suscipit aperiam dolore corrupti? Quo, modi atque illo porro earum distinctio provident repellat eveniet totam incidunt placeat molestias necessitatibus dignissimos vero tempore aliquid. Eveniet saepe, recusandae officia minus molestiae, beatae quisquam nam magnam ducimus autem alias earum suscipit velit! Placeat aut dicta cumque inventore optio, a doloribus eveniet esse aspernatur. Dicta delectus ipsum, ipsam sequi officia, explicabo doloribus accusamus unde inventore officiis non rerum alias quia modi illo quos fugiat tempora, deserunt totam nemo eos quasi incidunt voluptatem nihil. Voluptate, eaque? Debitis deserunt quos nemo ad pariatur distinctio exercitationem. Voluptatum debitis alias aliquid deserunt dolores non reprehenderit repellat odio distinctio.</p>
          </div>
      <div className="home-articles max-width-1 m-auto font2">
        <h2>People who read this also read</h2>
        <div className="row">
        <div className="home-article more-post">
          <div className="home-article-img">
            <img src={img1} alt="article" />
          </div>
          <div className="home-article-content center">
            <Link to="/blogpost">
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
            </Link>
            <div>Author Name</div>
            <span>07 Januvry | 6:30pm</span>
          </div>
        </div>
        <div className="home-article more-post">
          <div className="home-article-img">
            <img src={img3} alt="article" />
          </div>
          <div className="home-article-content center">
            <Link to="/blogpost">
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
            </Link>
            <div>Author Name</div>
            <span>07 Januvry | 6:30pm</span>
          </div>
        </div>
        <div className="home-article more-post">
          <div className="home-article-img">
            <img src={img2} alt="article" />
          </div>
          <div className="home-article-content center">
            <Link to="/blogpost">
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
            </Link>
            <div>Author Name</div>
            <span>07 Januvry | 6:30pm</span>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Blogpost
