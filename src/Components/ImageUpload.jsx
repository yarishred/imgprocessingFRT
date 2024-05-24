/* eslint-disable react/prop-types */
import { useState } from "react";
import "../assets/styles/ImageUpload.css";

export const ImageUpload = ({ setShowModal }) => {
  const [imageUpload, setImageUpload] = useState(null);
  // const [previewImage, setPreviewImage] = useState(null);

  // const [getImages, setGetImages] = useState([]);
  // console.log(getImages);
  // const handleGetImages = async () => {
  //   try {
  //     const response = await fetch("http://127.0.0.1:5500");
  //     const data = await response.json();
  //     setGetImages(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const HandleImageUpload = (e) => {
    const file = e.target.files[0];
    setImageUpload(file);
    // setPreviewImage(URL.createObjectURL(file));
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
      console.log(data);
      if (!data.ok) {
        throw new Error(`Status: ${data.status}`);
      }
    } catch (err) {
      throw new Error(err);
    }
    setShowModal(false);
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
