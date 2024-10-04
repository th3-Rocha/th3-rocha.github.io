import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ThemeContext } from "../theme/ThemeProvider";
import {
  Mail,
  Instagram,
  HalfMoon,
  GithubCircle,
  SunLight,
} from "iconoir-react";
import H2TextSpan from "./h2Text";

const ExtContainer = styled.div`
  height: 25rem;
  display: grid;
  grid-template-columns: 1fr 3fr;
  color: ${({ theme }) => theme.colors.background};
  font-family: ${({ theme }) => theme.fonts.main};
  pointer-events: none;

  @media (max-width: 1100px) {
    grid-template-columns: 0fr 4fr;
  }
`;

const ExtContainer2 = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  pointer-events: none;
`;

const BottomLine = styled.div`
  height: 0px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.footerLineHard};
  margin-left: 3rem;
  margin-right: 3rem;
  width: calc(100% - 5rem);
  pointer-events: none;
  @media (max-width: 1100px) {
    margin-left: 2rem;
  }
  @media (max-width: 600px) {
    width: calc(100% - 4rem);
  }
`;

const FooterRight = styled.div`
  border-left: 1px solid ${({ theme }) => theme.colors.footerLine};
  display: flex;
  justify-content: center;
  vertical-align: middle;
  flex-direction: column;
  pointer-events: auto;
  margin-left: 0rem;

  div {
    margin-left: 0.5rem;
    span {
      cursor: pointer;
      text-decoration: underline;
    }
  }
  @media (max-width: 1100px) {
    margin-left: 2rem;
  }
`;

const FooterLeft = styled.div`
  margin-bottom: 0;

  pointer-events: none;
`;

const TextAboveContact = styled.div`
  margin-bottom: 0;
`;

const TextContact = styled.div`
  h2 {
    text-underline-offset: 1rem;
  }
`;

interface FooterProps {
  WantText: string;
  ContactText: string;
  onContactClick: () => void;
}

const PreFooter: React.FC<FooterProps> = ({
  WantText,
  ContactText,
  onContactClick,
}) => {
  return (
    <ExtContainer2>
      <ExtContainer>
        <FooterLeft></FooterLeft>
        <FooterRight>
          <TextAboveContact>
            <H2TextSpan Text={WantText} />
          </TextAboveContact>
          <TextContact onClick={onContactClick}>
            <H2TextSpan TextHighlight={ContactText} />
          </TextContact>
        </FooterRight>
      </ExtContainer>
      <BottomLine />
    </ExtContainer2>
  );
};

export default PreFooter;
