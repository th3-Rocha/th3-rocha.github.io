import React from "react";
import styled from "styled-components";

interface IconButtonProps {
  url: string;
  children: React.ReactNode;
}

const Icon = styled.div`
  padding: 0.8rem;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.icon};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  
  * {
    color: ${({ theme }) => theme.colors.primary};
    height: 1.8rem;
    width: 1.8rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
   
  }
`;

const IconButtonLink: React.FC<IconButtonProps> = ({ url, children }) => {
  const handleClick = () => {
    window.open(url, "_blank");
  };

  return <Icon onClick={handleClick}>{children}</Icon>;
};

export default IconButtonLink;
