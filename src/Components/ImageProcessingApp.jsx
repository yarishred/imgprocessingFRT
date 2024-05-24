import { useState } from "react";
import { ModalUpload } from "./ModalUpload";
import { NavigationMenu } from "./NavigationMenu";
import { SideMenu } from "./SideMenu";


export const ImageProcessingApp = () => {

  const [showModal, setShowModal] = useState(false)

  return (
    <main>
      <NavigationMenu setShowModal={setShowModal} />
      <SideMenu/>
      {showModal && <ModalUpload setShowModal={setShowModal}/>}
    </main>
  );
};
