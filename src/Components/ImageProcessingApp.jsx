import { useEffect, useState } from "react";
import { ModalUpload } from "./ModalUpload";
import { NavigationMenu } from "./NavigationMenu";
import { SideMenu } from "./SideMenu";
import { MainViewer } from "./MainViewer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import io from "socket.io-client";

import "../assets/styles/Main.css";

export const ImageProcessingApp = () => {
  const [getImages, setGetImages] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [activeImage, setActiveImage] = useState({
    id: "",
    currentImage: getImages[0]?.imageFile,
    active: false,
  });
  const [socket, setSocket] = useState({
    alpha: "1",
    beta: "50",
    socket: null,
    idImage: "",
  });
  const [updatedImage, setUpdatedImage] = useState(null);

  useEffect(() => {
    const newSocket = io("http://localhost:5500"); // Reemplaza con la URL de tu servidor Node.js
    setSocket((socket) => ({
      ...socket,
      socket: newSocket,
    }));

    newSocket.on("disconnect", () => {
      setSocket(null);
    });

    return () => newSocket.disconnect();
  }, []);

  useEffect(() => {
    if (socket.socket) {
      socket.socket.emit("updateOptions", {
        alpha: socket.alpha,
        beta: socket.beta,
        idImage: activeImage.id,
      });
    }
    if (socket.socket) {
      socket.socket.on("updatedImage", (imageUpdated) => {
        setUpdatedImage(imageUpdated);
      });
    }
  }, [socket.alpha, socket.beta, activeImage.id, socket]);

  const handleGetImages = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5500");
      const data = await response.json();
      setGetImages(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleGetImages();
  }, []);

  return (
    <main className="main-container">
      <BrowserRouter>
        <NavigationMenu setShowModal={setShowModal} />
        <section className="menu-viewer-container">
          <SideMenu
            setActiveImage={setActiveImage}
            getImages={getImages}
            activeImage={activeImage}
          />
          <Routes>
            <Route
              path="/"
              exact
              element={
                <MainViewer
                  {...activeImage}
                  socket={socket}
                  setSocket={setSocket}
                  {...updatedImage}
                />
              }
            />
            <Route
              path="/histogram"
              exact
              element={
                <MainViewer
                  {...activeImage}
                  socket={socket}
                  setSocket={setSocket}
                  {...updatedImage}
                />
              }
            />
            <Route
              path="/grayscale"
              exact
              element={
                <MainViewer
                  {...activeImage}
                  socket={socket}
                  setSocket={setSocket}
                  imageUpdated={updatedImage}
                  {...updatedImage}
                />
              }
            />
            <Route
              path="/rgboption"
              exact
              element={<MainViewer {...activeImage} />}
            />
          </Routes>
        </section>
        {showModal && <ModalUpload setShowModal={setShowModal} />}
      </BrowserRouter>
    </main>
  );
};
