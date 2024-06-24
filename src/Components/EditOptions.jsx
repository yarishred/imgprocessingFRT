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
  histogram
}) => {
  const SelectedComponent = {
    grayScale: GrayScale,
    rgbOption: RGBOption,
    histogram: Histogram,
  };

  const CurrentComponent = SelectedComponent[option];

  return (
    <aside
      className="edit-options"
      style={{ display: !currentImage && "none" }}
    >
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
      <figure className="histogram-viewer">
        <img src={`data:image/jpeg;base64,${histogram}`} alt="" />
      </figure>
    </aside>
  );
};
