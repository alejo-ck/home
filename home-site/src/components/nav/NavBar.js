import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Home from '../body/home/Home'
import Blog from '../body/blog/Blog'
import Projects from '../body/projects/Projects'
import Contact from '../body/contact/Contact'
import './NavBar.css'

function NavBar() {
  return (
    <BrowserRouter>
      {/* Render Page Menu */}
      <div className="HomeSiteNavbar">
        <div className="HomeSiteNavbarLogo">
          <img className="HomeLogo" src={process.env.PUBLIC_URL + '/ack_logo_home.png'}  alt={"Home Logo"}/>
        </div>
        <div className="nav-option-container">
          <div className="NavOption">
            <NavLink to='/' className='nav-link'>
              Home
            </NavLink>
          </div>
          <div className="NavOption">
            <NavLink to='/blog' className='nav-link'>
              Blog
            </NavLink>
          </div>
          <div className="NavOption">
            <NavLink to='/projects' className='nav-link'>
              Projects
            </NavLink>
          </div>
          <div className="NavOption">
            <NavLink to='/contact' className='nav-link'>
              Contact
            </NavLink>
          </div>
        </div>
      </div>

      {/* Route to Body */}
      <Routes>
          <Route
              path="/"
              element={<Home />}
          ></Route>
          <Route
              path="/blog"
              element={<Blog />}
          ></Route>
          <Route
              path="/projects"
              element={<Projects />}
          ></Route>
          <Route
              path="/contact"
              element={<Contact />}
          ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default NavBar;
