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
 
`;

const ExtContainer2 = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
`;

const BottomLine = styled.div`
  height: 0px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.footerLineHard};
  margin-left: 3rem;
  margin-right: 3rem;
  width: calc(100% - 6rem);
`;

const FooterRight = styled.div`
  border-left: 1px solid ${({ theme }) => theme.colors.footerLine};
  display: flex;
  justify-content: center;
  flex-direction: column;
 
  div{
    margin-left: 1rem;
    max-width: 23rem;
    span{
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;
const FooterLeft = styled.div`
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


const PreFooter = () => {
  return (
    <ExtContainer2>
      <ExtContainer>
        <FooterLeft>
        </FooterLeft>
        <FooterRight>
          <H2TextSpan Text="Want to hire me? " TextHighlight="Contact Me" />
        </FooterRight>
      </ExtContainer>
      <BottomLine />
    </ExtContainer2>
  );
};

export default PreFooter;