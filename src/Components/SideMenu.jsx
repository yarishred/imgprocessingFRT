import { ImageVisualizer } from "./ImageVisualizer";

import "../assets/styles/SideMenu.css";
import { ImageCollage } from "./ImageCollage";
import { useState } from "react";

export const SideMenu = () => {
  const [currentImage, setCurrentImage] = useState({});

  return (
    <section className="side-menu-container">
      <h3>Imagen en uso</h3>
      <ImageVisualizer {...currentImage} />
      <h3>Tus Imagenes</h3>
      <ImageCollage setCurrentImage={setCurrentImage} />
    </section>
  );
};
