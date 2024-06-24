import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="experience">
      <h2 className="section__title">Experience</h2>
      <span className="section__subtitle">Milestones Made</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex hover-effect"
                : "qualification__button button--flex hover-effect"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex hover-effect"
                : "qualification__button button--flex hover-effect"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
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

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
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