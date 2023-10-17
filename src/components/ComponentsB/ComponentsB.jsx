import { useToggle } from '../hooks';
import { Modal } from '../Modal/Modal';

 export const ComponentsB = () => {
  const {openModal, closeModal, isModalOpen} = useToggle(true);

  return (
   <>
    <Modal onClick={closeModal} isModalOpen={isModalOpen}/>
    <button type='button' onClick={openModal}>Open Modal B</button>
   </>
  )
}

