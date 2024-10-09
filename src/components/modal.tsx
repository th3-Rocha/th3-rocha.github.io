import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// Modal styles
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  max-width: 400px;
  text-align: center;
`;

const ModalButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const ModalText = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const SucessModal: React.FC<{ toggleModal?: () => void }> = ({ toggleModal }) => {
  const navigate = useNavigate();

  // Route to the /contact page when the button is clicked
  const handleNavigate = () => {
   
    navigate("/contact"); // Navigate to the contact page
  };

  return (
    <ModalOverlay onClick={toggleModal}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalText>Success</ModalText>
        <ModalButton onClick={handleNavigate}>Go to Contact</ModalButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default SucessModal;
