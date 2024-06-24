import React from "react";
import "./qualification.css";

const Qualification = () => {
  return (
    <section className="qualification section" id="experience">
      <h2 className="section__title"><i className="uil uil-briefcase-alt qualification__icon"></i> Experience</h2>
      <span className="section__subtitle">Milestones Made</span>

      <div className="qualification__container container">
        <div className="qualification__sections">
          <div className="qualification__content qualification__content-active">
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Teaching Assistant</h3>
                <span className="qualification__subtitle">
                  University of Minnesota, Twin Cities
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> June 2024 - Present
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
                <h3 className="qualification__title">Usability Services Assistant</h3>
                <span className="qualification__subtitle">
                  University of Minnesota, Twin Cities
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Sep 2023 - Present
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Software Engineer Intern</h3>
                <span className="qualification__subtitle">
                  MSR Cosmos - Seattle
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> May 2023 - Jul 2023
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
                <h3 className="qualification__title">Student Manager</h3>
                <span className="qualification__subtitle">
                  University of Minnesota, Twin Cities
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Jan 2023 - Jun 2024
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Business Manager</h3>
                <span className="qualification__subtitle">
                  Large-scale Jewelry Business, Yanam, India
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2020 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <h2 className="section__title"><i className="uil uil-graduation-cap qualification__icon"></i>Education</h2>
      <span className="section__subtitle">Academic Journey</span>

      <div className="qualification__container container">
        <div className="qualification__sections">
          <div className="qualification__content qualification__content-active">
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Computer Science Major</h3>
                <span className="qualification__subtitle">
                  University of Minnesota, Twin Cities
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2022 - Present
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
                <h3 className="qualification__title">Management of Technology Minor</h3>
                <span className="qualification__subtitle">
                  University of Minnesota, Twin Cities
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2022 - Present
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Student Exchange</h3>
                <span className="qualification__subtitle">
                  California Polytechnic State University - San Luis Obispo
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Sep 2023 to Dec 2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;