/* eslint-disable react/prop-types */


export const ImageCollage = ({ getImages, setActiveImage }) => {
  const handleCurrentImage = (image) => {
    setActiveImage((activeImage) => ({
      ...activeImage,
      active: true,
      currentImage: image.imageFile,
      id: image._id
    }));

  };

  

  return (
    <article className="image-collage">
      {getImages.length > 0 ? (
        getImages.map((image, index) => (
          <div
            key={index}
            className="image-uploaded"
            onClick={() => handleCurrentImage(image)}
          >
            <img src={`http://localhost:5500/${image.imageFile}`} alt="" />
          </div>
        ))
      ) : (
        <div style={{ display: "none" }}></div>
      )}
    </article>
  );
};
