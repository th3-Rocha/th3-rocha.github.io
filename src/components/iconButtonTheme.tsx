import React, { useState } from "react";
import styled from "styled-components";

interface IconButtonProps {
  onClick: () => void;
  children1: React.ReactNode;
  children2: React.ReactNode;
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
  
`;

const IconButtonTheme: React.FC<IconButtonProps> = ({
  onClick,
  children1,
  children2,
}) => {
  const [isFirstIcon, setIsFirstIcon] = useState(true);

  const handleClick = () => {
    onClick();
    setIsFirstIcon((prevState) => !prevState);
  };

  return (
    <Icon onClick={handleClick}>{isFirstIcon ? children1 : children2}</Icon>
  );
};

export default IconButtonTheme;
