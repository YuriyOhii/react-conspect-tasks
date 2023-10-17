import { useState } from "react";
export const useToggle = (initValue) =>{
    const [isModalOpen, setIsModalOpen] = useState(initValue);
    const closeModal = () => setIsModalOpen(false);
    const openModal = () => setIsModalOpen(true);
    const toggleModal = () => setIsModalOpen(!isModalOpen);
    return {isModalOpen, closeModal, openModal, toggleModal}
}