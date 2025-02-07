import React from 'react';
import "./Qualification.css";
import HNG from "../../assets/HNG Certs.jpg";
import PWC from "../../assets/PwC Certification.pdf";
import DC from "../../assets/Data Analyst Associate Certificate.pdf"

const Qualification = () => {
  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className="qualification__button qualification__active button--flex">
                    <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
                    Education
                </div>

                <div className="qualification__button button--flex">
                    <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
                    Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div className="qualification__content qualification__content-active">
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Applied Physics</h3>
                            <span className="qualification__subtitle">University Of Lagos, NG</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>{" "}
                                2020 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">
                                <a target='__blank' className="qualification__title" href={HNG}>
                                Data Analyst Intern
                                </a>
                                
                            </h3>
                            <span className="qualification__subtitle">HNG Internships</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>{" "}
                                Oct 2023 - Jan 2024
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">
                                <a target='__blank' className="qualification__title" href={DC}>
                                Data Analyst Associate
                                </a>
                                
                            </h3>
                            <span className="qualification__subtitle">DataCamp</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>{" "}
                                Oct 2024 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">
                                <a target='__blank' className="qualification__title" href={PWC}>
                                Forage Program: Data Visualization
                                </a>
                                
                            </h3>
                            <span className="qualification__subtitle">PwC Switzerland</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>{" "}
                                June 2024 - Sept 2024
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification