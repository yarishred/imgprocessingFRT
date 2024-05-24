/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

export const ImageCollage = ({ setCurrentImage }) => {
  const [getImages, setGetImages] = useState([]);

  const handleGetImages = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5500");
      const data = await response.json();
      setGetImages(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCurrentImage = (image) => {
    setCurrentImage(image);
  };

  useEffect(() => {
    handleGetImages();
  }, []);

  return (
    <article className="image-collage">
      {getImages.map((image) => (
        <>
          <div
            className="image-uploaded"
            onClick={() => handleCurrentImage(image)}
          >
            <img
              key={image.imageFile}
              src={`http://localhost:5500/${image.imageFile}`}
              alt=""
            />
          </div>
        </>
      ))}
    </article>
  );
};
