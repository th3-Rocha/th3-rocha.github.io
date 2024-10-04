import React from "react";
import styled from "styled-components";

const SubProjContainer = styled.div`
  display: flex;
  width: 100%;
  display: grid;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
  grid-template-columns: 2.2fr 2.8fr;
  animation: fadeIn 1s forwards;

  @media (max-width: 630px) {
    grid-template-columns: 1fr;
    grid-template-rows: 2fr auto;
    border-bottom: 0px solid ${({ theme }) => theme.colors.secondary};
  }
`;

const ImgContainer = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  filter: sepia(20%); 
`;

const TextContainer = styled.div`
  padding: 1rem;
  padding-top: 0;
  margin-top: 0;
  display: flex;
  flex-direction: column;
  justify-content: end;
  margin-bottom: 0.5rem;
  h3 {
    margin-top: 1rem;
    font-size: 4rem;
    font-weight: 400;
    margin-block-end: 1rem;
    font-family: "shzapfrenaisantlight-ita";
  }
  span {
    font-size: 1rem;
    font-weight: 400;
    line-height: 0.9;
    margin-top: 1rem;
    font-family: "Inter", sans-serif;
  }
  @media (max-width: 630px) {
    order: 1;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    padding: 1rem;
    padding-top: 0;
    margin-top: 0;
    height: 100%;
    h3 {
      font-size: 2.4rem;
      margin-top: 1rem;
      margin-bottom: 0.8rem;
    }
    span {
      font-weight: 400;
      line-height: 0.9;
      font-size: 1rem;
    }
  }
`;

interface SubProjComponentProps {
  title: string;
  description: string;
  imgSrc: string;
  classNameTag?: string;
  urlTo?:string;
}

const SubProjComponent: React.FC<SubProjComponentProps> = ({
  title,
  description,
  imgSrc,
  classNameTag,
  urlTo,
}) => {
  return (
    <a href={urlTo} target="_blank" rel="noreferrer" style={{textDecoration: 'none', color: 'inherit'}}>
      <SubProjContainer className={classNameTag}>
        <TextContainer>
          <div>
            <h3>{title}</h3>
            <span>{description}</span>
          </div>
        </TextContainer>
        <ImgContainer src={imgSrc} alt={title} />
      </SubProjContainer>
    </a>
  );
};

export default SubProjComponent;
