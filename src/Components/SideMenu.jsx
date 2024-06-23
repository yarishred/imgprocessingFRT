/* eslint-disable react/prop-types */
import { ImageVisualizer } from "./ImageVisualizer";

import "../assets/styles/SideMenu.css";
import { ImageCollage } from "./ImageCollage";

export const SideMenu = ({getImages,setActiveImage, activeImage}) => {


  return (
    <section className="side-menu-container">
      <h3>Imagen en uso</h3>
      <ImageVisualizer {...activeImage}  getImages={getImages} />
      <h3>Tus Imagenes</h3>
      <ImageCollage setActiveImage={setActiveImage} getImages={getImages} />
    </section>
  );
};
