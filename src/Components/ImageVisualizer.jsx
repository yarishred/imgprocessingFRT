/* eslint-disable react/prop-types */

import "../assets/styles/ImageVisualizer.css";

export const ImageVisualizer = ({ imageFile }) => {
  return (
    <article className="image-visualizer">
      <img src={`http://localhost:5500/${imageFile}`} alt="" />
    </article>
  );
};
