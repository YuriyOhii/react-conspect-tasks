import { Modal } from '../Modal/Modal';
import { useToggle } from '../hooks';

 export const ComponentA = () => {
    const {openModal, closeModal, isModalOpen} = useToggle(true);

  return (
   <>
    <Modal onClick={closeModal} isModalOpen={isModalOpen}/>
    <button type='button' onClick={openModal}>Open Modal A</button>
   </>
  )
}

