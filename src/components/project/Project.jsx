import React, { useState } from 'react';
import "./Project.css"
import Portfolio from "./Portfolio"

const Project = () => {
  return (
    <section className="portfoliio section" id="portfolio">
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">My showcase</span>

        <div className="project__container">
            <Portfolio />
        </div>
    </section>
  )
}

export default Project