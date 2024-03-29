import { useState } from 'react'
import './navbar.scss'
import {Search,Notifications, ArrowDropDown} from '@material-ui/icons/index'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = ()=> {
      setIsScrolled(window.pageYOffset === 0 ? false : true)
      return () => (window.onscroll = null); 
    }
    console.log(isScrolled)
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className="container">
            <div className="left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158" alt="Netflix Logo" />
                <span>Homepage</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New and Popular</span>
                <span>My List</span>
            </div>
            <div className="right">
              <Search className='icon'/>
              <span>KID</span>
              <Notifications className='icon'/>
              <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg" alt="" />
              <div className="profile">
                <ArrowDropDown className='icon'/>
                <div className="options">
                  <span>Settings</span>
                  <span>Logout</span>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar