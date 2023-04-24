import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <>
    <nav className='navigation max-width-1 m-auto'>
        <div className="nav-left">
          <Link to='/'><span>iBlog</span></Link>
        <ul>
        <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        </div>
        <div className="nav-right">
          <form action="/search" method='get'>
            <input type="text" className='form-input' placeholder='article search' name='query'/>
            <button className="btn">Search</button>
          </form>
        </div>
    </nav>
    <div className="max-width-1 m-auto">
      <hr />
    </div>
    </>
  )
}

export default Navbar
