/* eslint-disable react/prop-types */
import "../assets/styles/EditOptions.css";
import { Histogram } from "./Histogram";
import { GrayScale } from "./GrayScale";
import { RGBOption } from "./RGBOption";

export const EditOptions = ({
  option,
  currentImage,
  imageId,
  socket,
  setSocket,
}) => {
  const SelectedComponent = {
    grayScale: GrayScale,
    rgbOption: RGBOption,
    histogram: Histogram,
  };

  const CurrentComponent = SelectedComponent[option];

  return (
    <aside className="edit-options">
      {option ? (
        <CurrentComponent
          currentImage={currentImage}
          imageId={imageId}
          socket={socket}
          setSocket={setSocket}
        />
      ) : (
        <GrayScale
          socket={socket}
          setSocket={setSocket}
          currentImage={currentImage}
          imageId={imageId}
        />
      )}
    </aside>
  );
};
