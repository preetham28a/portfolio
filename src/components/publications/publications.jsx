import React from "react";
import "./publications.css";
import { Data } from "./Data";

const Publications = () => {
  return (
    <section className="testimonial container section" id="publications">
      <h2 className="section__title">Publications</h2>
      <span className="section__subtitle">Author</span>

      <div className="testimonial__container">
        {Data.map(({ id, image, title, amazonLink, notionPressLink }) => {
          return (
            <div className="testimonial__card" key={id}>
              <a href={amazonLink} target="_blank" rel="noopener noreferrer">
                <img src={image} alt={title} className="testimonial__img hover-effect" />
              </a>
              <h3 className="testimonial__name">{title}</h3>
              <div className="publication__links">
                <a href={amazonLink} target="_blank" rel="noopener noreferrer" className="publication__link hover-link">
                  Amazon
                </a>
                <a href={notionPressLink} target="_blank" rel="noopener noreferrer" className="publication__link hover-link">
                  Notion Press
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Publications;