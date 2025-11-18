import React from "react";
import styled from "styled-components";

const LinkProjContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
  animation: fadeIn 1s forwards;

  @media (max-width: 630px) {
    border-bottom: 0px solid ${({ theme }) => theme.colors.secondary};
  }
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

const Actions = styled.div`
  margin-top: 1rem;
`;

const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0.6rem 1rem;
  border-radius: 999px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  font-family: "Inter", sans-serif;
  transition: background-color 0.2s ease, color 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.background};
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;

interface SubProjectLinkProps {
  title: string;
  description: string;
  urlTo: string;
  classNameTag?: string;
  buttonLabel?: string;
  newTab?: boolean;
}

const SubProjectLink: React.FC<SubProjectLinkProps> = ({
  title,
  description,
  urlTo,
  classNameTag,
  buttonLabel = "Git Page",
  newTab = true,
}) => {
  const target = newTab ? "_blank" : undefined;
  return (
    <LinkProjContainer className={classNameTag}>
      <TextContainer>
        <div>
          <h3>{title}</h3>
          <span>{description}</span>
        </div>
        <Actions>
          <LinkButton
            href={urlTo}
            target={target}
            rel={newTab ? "noreferrer" : undefined}
            aria-label={`${title} - abrir repositório`}
          >
            {buttonLabel}
          </LinkButton>
        </Actions>
      </TextContainer>
    </LinkProjContainer>
  );
};

export default SubProjectLink;
