/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import "../assets/styles/ImageUpload.css";

export const ImageUpload = ({ setShowModal }) => {
  const [imageUpload, setImageUpload] = useState(null);

  const navigate = useNavigate();

  const HandleImageUpload = (e) => {
    const file = e.target.files[0];
    setImageUpload(file);
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", imageUpload);

    try {
      const response = await fetch("http://127.0.0.1:5500/", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (!data.ok) {
        throw new Error(`Status: ${data.status}`);
      }
    } catch (err) {
      throw new Error(err);
    }
    setShowModal(false);
    navigate("/", { state: { newImageUploaded: true } });
  };


  

  return (
    <form
      method="POST"
      action="/"
      encType="multipart/formData"
      onSubmit={HandleSubmit}
    >
      <div className="input-wrapper">
        <label htmlFor="file">Seleccionar Imagen</label>
        <input type="file" name="file" id="file" onChange={HandleImageUpload} />
      </div>
      <input type="submit" value="Subir" />
    </form>
  );
};
