/* eslint-disable react/prop-types */
import "../assets/styles/ModalUpload.css";
import { ImageUpload } from "./ImageUpload";

export const ModalUpload = ({ setShowModal }) => {
  return (
    <>
      <div className="modal-wrapper"></div>
      <div className="modal">
        <ImageUpload setShowModal={setShowModal} />
      </div>
    </>
  );
};
