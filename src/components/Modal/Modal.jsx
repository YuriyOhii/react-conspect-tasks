import { Overlay, ModalW } from "./Modal.styled";
export const Modal = ({ onClick, isModalOpen }) => {
  return (
    <>
      {isModalOpen && (
        <Overlay>
          <ModalW>
            <p>I am MODAL WINDOW</p>
            <button type="button" onClick={onClick}>
              Close
            </button>
          </ModalW>
        </Overlay>
      )}
    </>
  );
};
