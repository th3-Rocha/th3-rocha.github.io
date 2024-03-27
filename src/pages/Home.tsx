import styled from "styled-components";
import { Iconoir } from "iconoir-react";
import {
  Mail,
  Instagram,
  HalfMoon,
  GithubCircle,
  SunLight,
} from "iconoir-react";
import Header from "../components/minimalist/header";
import React, { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../translations/LanguageContext";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

import "./locomotive-scroll.css";
import { useRef } from "react";
import gsap from "gsap";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary};
`;

const ExtContainer = styled.div`
  display: grid;
  grid-template-rows: 1;
  grid-template-columns: 1.05fr 3fr;
  height: 3000px;
  width: 100%;

  @media (max-width: 1100px) {
    grid-template-columns: 32px 14fr;
  }
`;

const LeftContainer = styled.div`
  border-right: 1px solid #00000012;
  min-width: 19rem;
  @media (max-width: 1100px) {
    min-width: 1rem;
  }
`;
const RightContainer = styled.div``;

const IntroContainer = styled.div`
  border-bottom: 1px solid #000000;
  height: 494px;
  margin-right: 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
`;
const IntroTexts = styled.div`
  margin-left: 0.6rem;
  div {
    clip-path: polygon(0% 0%, 100% 0%, 100% 90%, 0% 90%);
    h1 {
      margin: 0;
      position: relative;
      overflow: hidden;

      margin-top: 7.4rem;
      font-family: "Dancing Script";
      font-size: 6rem;
      margin-bottom: 0px;
    }
    h2 {
      width: 60rem;
      font-family: "Inter", sans-serif;
      font-optical-sizing: auto;
      letter-spacing: -2px;
      font-weight: 300;
      font-style: normal;
      font-variation-settings: "slnt" 0;
      margin-top: 1rem;
      font-size: 3rem;
      span {
        font-family: "Cormorant Garamond", serif;
        font-weight: 500;
        font-style: normal;
        font-size: 3.6rem;
      }
    }
  }
`;
const IntroIcons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-left: 0.6rem;
  position: absolute;
  bottom: 0;
  margin-bottom: 1.5rem;
`;

const Icon = styled.div`
  padding: 0.8rem;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: center;
  align-items: center;
  * {
    height: 1.8rem;
    width: 1.8rem;
  }
`;

function Home() {
  const { scroll } = useLocomotiveScroll();
  const containerRef = useRef(null);

  const { language, translations } = useContext(LanguageContext);

  useEffect(() => {
    gsap.from(".intro-texts > div > h1, h2", { 
      duration: 1,
      yPercent: 600,
      ease: "power4",
      stagger: 0.2,
    });
  }, []);

  useEffect(() => {
    gsap.from(".intro-Icons > div", { 
      duration: 1,
      yPercent: 35,
      ease: "power4",
      stagger: 0.06,
    });
  }, []);

  return (
    <div>
      <HomeContainer data-scroll-section>
        <Header activePage="home" />
        <LocomotiveScrollProvider
          options={{
            smooth: true, // Enable smooth scrolling
            direction: "vertical", // Set scroll direction to vertical (default is 'vertical')
            smartphone: { smooth: true }, // Enable smooth scrolling on smartphones
            tablet: { smooth: true }, // Enable smooth scrolling on tablets
          }}
          watch={[]}
          containerRef={containerRef}
        >
          <main data-scroll-container ref={containerRef}>
            <ExtContainer>
              <LeftContainer></LeftContainer>
              <RightContainer>
                <IntroContainer data-scroll>
                  <IntroTexts  className="intro-texts">
                    <div>
                      <h1>{translations.home.name}</h1>
                    </div>
                    <div>
                      <h2>
                        {translations.home.nameDescription}
                        <span>
                          {translations.home.nameDescriptionHighlight}
                        </span>
                      </h2>
                    </div>
                  </IntroTexts>
                  <IntroIcons  className="intro-Icons">
                    <Icon>
                      <GithubCircle />
                    </Icon>
                    <Icon>
                      <Mail />
                    </Icon>
                    <Icon>
                      <Instagram />
                    </Icon>
                    <Icon>
                      <HalfMoon />
                    </Icon>
                  </IntroIcons>
                </IntroContainer>
              </RightContainer>
            </ExtContainer>
          </main>
        </LocomotiveScrollProvider>
      </HomeContainer>
    </div>
  );
}

export default Home;
