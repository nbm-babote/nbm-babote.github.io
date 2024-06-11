import React, { useState } from "react";
import "./qualification.css"
import * as Unicons from "@iconscout/react-unicons";


const Qualification = () => {
    const [toggleState, settoggleState] = useState(1)

    const toggleTab = (index) =>{
      settoggleState(index);
    }

  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personel journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"} onClick={() => toggleTab(1)} >
                    <Unicons.UilGraduationCap className="qualification__icon" />{" "}Education
                </div>

                <div className={toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"} onClick={() => toggleTab(2) } >
                    <Unicons.UilBriefcaseAlt className="qualification__icon" />Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState === 1
                    ? "qualification__content qualification__content-active"
                    : "qualification__content"    
                }>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Web Design</h3>
                            <span className="qualification__subtitle">Span - Institute</span>
                            <div className="qualification__calendar">
                                <Unicons.UilCalendarAlt className="qualification__calendar-icon" /> 2021 - Present
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
                            <h3 className="qualification__title">Art Director</h3>
                            <span className="qualification__subtitle">Span - Institute</span>
                            <div className="qualification__calendar">
                                <Unicons.UilCalendarAlt className="qualification__calendar-icon" /> 2020 - 2021
                            </div>
                        </div>
                    </div>
                    
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Web Developement</h3>
                            <span className="qualification__subtitle">Span - Institute</span>
                            <div className="qualification__calendar">
                                <Unicons.UilCalendarAlt className="qualification__calendar-icon" /> 2018 - 2020
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
                            {/* <span className="qualification__line"></span> */}
                        </div>
                        <div>
                            <h3 className="qualification__title">UX Expert</h3>
                            <span className="qualification__subtitle">Span - Institute</span>
                            
                            <div className="qualification__calendar">
                                <Unicons.UilCalendarAlt className="qualification__calendar-icon" /> 2017 - 2018
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className={toggleState === 2
                    ? "qualification__content qualification__content-active"
                    : "qualification__content"    
                }>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Product Designer</h3>
                            <span className="qualification__subtitle">Microsoft - Spain</span>
                            <div className="qualification__calendar">
                                <Unicons.UilCalendarAlt className="qualification__calendar-icon" /> 2021 - Present
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
                            <h3 className="qualification__title">UX Designer</h3>
                            <span className="qualification__subtitle">Apple Inc - Spain</span>
                            <div className="qualification__calendar">
                                <Unicons.UilCalendarAlt className="qualification__calendar-icon" /> 2020 - 2021
                            </div>
                        </div>
                    </div>
                    
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Web Designer</h3>
                            <span className="qualification__subtitle">Figma - Spain</span>
                            <div className="qualification_calendar">
                                <Unicons.UilCalendarAlt className="qualification__calendar-icon" /> 2018 - 2020
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            {/* <span className="qualification__line"></span> */}
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification