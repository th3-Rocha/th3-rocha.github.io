import styled from "styled-components";
import { Iconoir } from "iconoir-react";
import {
  Mail,
  Instagram,
  HalfMoon,
  GithubCircle,
  SunLight,
} from "iconoir-react";
import Header from "../components/header";
import React, { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../translations/LanguageContext";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

import "./locomotive-scroll.css";
import { useRef } from "react";
import gsap from "gsap";
import IconButtonTheme from "../components/iconButtonTheme";
import IconButtonLink from "../components/iconButtonLink";
import { Theme } from "../theme/themes/theme";

import CoverComponent from "../components/coverPage";
import RevealComponent from "../components/revealPage";

import useRouterChange from "../components/useRouterChange";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary};
  transition: 0.3s ease;
`;

const ExtContainer = styled.div`
  display: grid;
  grid-template-rows: 1;
  grid-template-columns: 1fr 3fr;

  height: 3000px;
  width: 100%;

  @media (max-width: 1100px) {
    grid-template-columns: 32px 14fr;
  }
`;

const LeftContainer = styled.div`
  border-right: 1px solid ${({ theme }) => theme.colors.secondary};
  min-width: 19rem;
  @media (max-width: 1100px) {
    min-width: 1rem;
  }
`;
const SecTitle = styled.section`
  align-items: flex-start;
  display: flex;
  justify-content: flex-end;
  margin-right: -5rem;
  margin-top: 7rem;
`;

const SecTitle2 = styled.section`
  align-items: flex-start;
  display: flex;
  justify-content: flex-end;
  margin-right: -3rem;
  margin-top: 90rem;
`;

const LeftSpansText = styled.span`
  display: inline-block;
  transform: rotate(-90deg) translate(-100%, -100%);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  white-space: nowrap;

  font-size: 15px;
  font-weight: 400;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  font-family: "Inter", sans-serif;
`;

const ArrowCircle = styled.div`
  position: relative;
  width: 160px;
  height: 160px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 26rem;
  margin-left: 3rem;
  svg {
    height: 60px;
    path {
      fill: ${({ theme }) => theme.colors.text};
    }
  }
`;

const RightContainer = styled.div``;

const IntroContainer = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  height: 494px;
  margin-right: 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const IntroTexts = styled.div`
  margin-left: 0.6rem;
  div {
    clip-path: polygon(0% 0%, 110% 0%, 100% 100%, 0% 100%);
    h1 {
      margin: 0;
      margin-left: 3px;
      font-style: italic;
      position: relative;
      overflow: hidden;
      width: 100;
      margin-top: 7.4rem;
      font-weight: 400;
      font-family: "shzapfrenaisantlight-ita";
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

interface HomeProps {
  toggleDarkTheme: () => void;
}

function Home({ toggleDarkTheme }: HomeProps) {
  const { scroll } = useLocomotiveScroll();
  const containerRef = useRef(null);
  const [isActive, setIsActive] = useState(toggleDarkTheme);

  const { language, translations } = useContext(LanguageContext);

  useEffect(() => {
    gsap.from(".intro-texts > div > h1, h2", {
      duration: 1,
      yPercent: 600,
      ease: "power4",
      stagger: 0.2,
      delay: 0.4,
    });
  }, []);

  useEffect(() => {
    gsap.from(".intro-Icons > div", {
      duration: 1,
      yPercent: 35,
      ease: "power4",
      stagger: 0.06,
      delay: 0.6,
    });
  }, []);

  return (
    <div>
      <HomeContainer data-scroll-section>


        <RevealComponent></RevealComponent>

        <Header activePage="home" />
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            direction: "vertical",
            smartphone: { smooth: true },
            tablet: { smooth: true },
          }}
          watch={[]}
          containerRef={containerRef}
        >
          <main data-scroll-container ref={containerRef}>
            <ExtContainer>
              <LeftContainer>
                <ArrowCircle>
                  <svg
                    width="30"
                    height="60"
                    viewBox="0 0 30 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.0142 51.1472V0H13.879V51.1472L1.49466 40.2056L0 41.3992L14.9466 60L30 41.3992L28.6121 40.2056L16.0142 51.1472Z"
                      fill="black"
                    />
                  </svg>
                </ArrowCircle>
                <SecTitle>
                  <LeftSpansText>Selected work</LeftSpansText>
                </SecTitle>

                <SecTitle2>
                  <LeftSpansText>What I do</LeftSpansText>
                </SecTitle2>
              </LeftContainer>
              <RightContainer>
                <IntroContainer data-scroll>
                  <IntroTexts className="intro-texts">
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
                  <IntroIcons className="intro-Icons">
                    <IconButtonLink
                      url="https://github.com/th3-Rocha"
                      children={<GithubCircle />}
                    />
                    <IconButtonLink
                      url="https://mailto:murilorocha537@gmail.com"
                      children={<Mail />}
                    />
                    <IconButtonLink
                      url="https://instagram.com.br"
                      children={<Instagram />}
                    />
                    <IconButtonTheme
                      children1={<HalfMoon />}
                      children2={<SunLight />}
                      onClick={toggleDarkTheme}
                    />
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
