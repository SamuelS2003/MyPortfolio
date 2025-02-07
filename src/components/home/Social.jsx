import React from 'react'

const Social = () => {
  return (
    <div className="home__social">
        <a 
        href="https://github.com/SamuelS2003" 
        className="home__social-icon" 
        target='__blank'>
            <i class="uil uil-github-alt"></i>
        </a>

        <a 
        href="https://medium.com/@samuelsholademi37" 
        className="home__social-icon" 
        target='__blank'>
            <i class="uil uil-medium-m"></i>
        </a>

        <a 
        href="https://www.linkedin.com/in/samuel-sholademi-133710159/" 
        className="home__social-icon" 
        target='__blank'>
            <i class="uil uil-linkedin-alt"></i>
        </a>
    </div>
  )
}

export default Social