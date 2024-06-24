import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <a href={item.link} target="_blank" rel="noopener noreferrer">
        <img src={item.image} alt={item.title} className="work__img hover-effect" />
      </a>
      <h3 className="work__title">{item.title}</h3>
      <a href={item.link} target="_blank" rel="noopener noreferrer" className="work__button">
        GitHub
        <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  );
};

export default WorkItems;