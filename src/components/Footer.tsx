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

const ExtContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 12rem;
  display: grid;
  grid-template-columns: 1fr 3fr;
  color: ${({ theme }) => theme.colors.background};
  font-family: ${({ theme }) => theme.fonts.main};
  font-family: "Inter", sans-serif;
  @media (max-width: 600px) {
  font-size: 0.8rem;
    font-weight: 300;
    line-height: 0.9;


  }
`;



const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3rem;
  margin-top: 2rem;
  
  span {
    text-decoration: underline;
  }
`;

const FooterRight = styled.div`
  border-left: 1px solid ${({ theme }) => theme.colors.footerLine};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const TextRight = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  margin-top: 2rem;
  a{
    color: inherit;
    text-decoration: none;
  }
`;
const TextRightSpanEmail = styled.span`

  text-decoration: underline;
 
`;

const Icons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2rem;
  margin-right: 1rem;
  a {
    margin-right: 1rem;
    svg{
      height: 2rem;
      width: 2rem;
    }
    transition: opacity 0.3s;
    color: inherit; // Add this line to inherit the color from the parent
    text-decoration: none; // Add this line to remove the underline
    &:hover {
      opacity: 0.7;
    }
  }
  @media (max-width: 600px) {
    a {
    margin-right: 1rem;
    svg{
      display: none;
    }
  }

  }
`;

interface FooterProps {
  mailUrl: string;
  instagramUrl: string;
  githubUrl: string;
}

const Footer: React.FC<FooterProps> = ({ mailUrl, instagramUrl, githubUrl }) => {
  return (
    <ExtContainer>
      <FooterLeft>
        <span>Disclaim</span>
      </FooterLeft>
      <FooterRight>
        <TextRight>
          <span>Reach out for collaboration or say hi at</span>

          <a href={mailUrl} target="_blank" rel="noopener noreferrer">
            <TextRightSpanEmail > asdasdasdasdas@gmail.com</TextRightSpanEmail>
          </a>
        </TextRight>

        <Icons>
          <a href={mailUrl} target="_blank" rel="noopener noreferrer">
            <Mail />
          </a>
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
            <Instagram />
          </a>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <GithubCircle />
          </a>
        </Icons>
      </FooterRight>
    </ExtContainer>
  );
};

export default Footer;