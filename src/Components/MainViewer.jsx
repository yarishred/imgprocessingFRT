/* eslint-disable react/prop-types */
import { useState } from "react";

import "../assets/styles/MainViewer.css";

import { CONTROL_PANEL_ICONS } from "../utils/Utils.jsx";
import { EditOptions } from "./EditOptions.jsx";
import { NavLink, useLocation } from "react-router-dom";

export const MainViewer = ({
  currentImage,
  id,
  socket,
  setSocket,
  grayScaleImage,
  histogram
}) => {
  const [option, setOption] = useState("");
  const location = useLocation();
  const paths = {
    grayscale: "/grayscale",
    rgboption: "/rgboption",
    histogram: "/histogram",
  };



  const handleOptions = (optionName) => {
    setOption(optionName);
  };

  return (
    <section
      className="main-viewer-container"
      style={{ gridTemplateColumns: currentImage ? "repeat(6, 1fr)" : "1fr" }}
    >
      {!currentImage ? (
        <p>Por favor seleccione o importe una nueva imagen.</p>
      ) : location.pathname === paths.grayscale ? (
        <>
          <figure className="viewer">
            <img src={`data:image/jpeg;base64,${grayScaleImage}`} alt="" />
          </figure>
        </>
      ) : (
        <div><img src={`data:image/jpeg;base64,${histogram}`} alt="" /></div>
      )}

      <EditOptions
        option={option}
        socket={socket}
        currentImage={currentImage}
        imageId={id}
        setSocket={setSocket}
      />

      <article className="control-panel">
        {CONTROL_PANEL_ICONS.map((icon, index) => (
          <NavLink key={index} to={icon.path}>
            <button
              onClick={() => handleOptions(icon.comp)}
              className="control-btn"
            >
              <img src={icon.iconName} alt={icon.option} />
              <span>{icon.option}</span>
            </button>
          </NavLink>
        ))}
      </article>
    </section>
  );
};
