import React from "react";
import { CORE_CONCEPTS } from "../data";
import CoreConcepts from "./CoreConcepts.jsx";

function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

export default CoreConcept;
