import React, { useState } from 'react';
import "./Services.css"

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What i offer</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-bill services__icon"></i>
                    <h3 className="services__title">
                        Business <br />Analyst
                    </h3>
                </div>

                <span className="services__button" onClick={()=> toggleTab(1)}>
                    View More
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 1 ? "services__modal active__modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={()=> toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Business Analyst</h3>
                        <p className="services__modal-description">
                            Service with more than 5 projects showcasing my expertise. 
                            Providing a well detailed work. 
                        </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    I gather and evaluate business requirements.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    I collect and analyze data from various sources.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    I identify and mitigate potential business risks.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-analysis services__icon"></i>
                    <h3 className="services__title">
                        Data <br /> Analyst
                    </h3>
                </div>

                <span className="services__button" onClick={()=> toggleTab(2)}>
                    View More
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 2 ? "services__modal active__modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={()=> toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Data Analyst</h3>
                        <p className="services__modal-description">
                            Service with more than 5 projects showcasing my expertise. 
                            Providing a well detailed work. 
                        </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    I conduct performance analysis reports including trends.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    I design, develop, and configure interfaces and reports.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    I clean and manipulate data based on the requirements.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services