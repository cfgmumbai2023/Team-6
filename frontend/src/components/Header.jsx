import React from 'react'
import img from '../images/home-page/profile-img.png'

function Header() {
  return (
    <div className = "global-header">
        {/* APP LOGO IMG */}
        <div className = "logo-img">
            <svg x="0px" y="0px"
                width="54" height="54"
                viewBox="0 0 64 64">
            </svg>
            <div className = "logo-text text-primary"><label><strong>App Name</strong></label></div>
        </div>
        
        <div className="nav-bar">
        <ul class="nav">
            <li class="nav-item">
                <a class="nav-link" href="/admin">Admin</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/login">Login</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/register">Register</a>
            </li>
        </ul>
        </div>

	</div>
  )
}

export default Header