import React from 'react';
import styled from 'styled-components';

const SubProjContainer = styled.div`
  display: flex;
  width: 100%;
  display: grid;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
  grid-template-columns: 2.2fr 2.8fr;
  animation: fadeIn 1s forwards;

  
`;

const ImgContainer = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  
`;

const TextContainer = styled.div`
  padding: 1rem;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  justify-content: end;

  h3 {
    margin-bottom: 1rem;
    font-size: 3rem;
    font-weight: 400;
    font-family: 'shzapfrenaisantlight-ita';
  }
`;

interface SubProjComponentProps {
  title: string;
  description: string;
  imgSrc: string;
  className: string;
}

const SubProjComponent: React.FC<SubProjComponentProps> = ({ title, description, imgSrc, className }) => {
  return (
    <SubProjContainer className={className}>
      <TextContainer>
        <div>
          <h3>{title}</h3>
          <span>{description}</span>
        </div>
      </TextContainer>
      <ImgContainer src={imgSrc} alt={title} />
    </SubProjContainer>
  );
};

export default SubProjComponent;
