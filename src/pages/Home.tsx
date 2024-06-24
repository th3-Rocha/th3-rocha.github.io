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
import React, { useContext, useEffect, useState, useRef } from "react";
import { LanguageContext } from "../translations/LanguageContext";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import TextPlugin from "gsap/TextPlugin";

import "./locomotive-scroll.css";
import gsap from "gsap";
import IconButtonTheme from "../components/iconButtonTheme";
import IconButtonLink from "../components/iconButtonLink";
import { Theme } from "../theme/themes/theme";

import CoverComponent from "../components/coverPage";
import RevealComponent from "../components/revealPage";
//components
import H2TextSpan from "../components/h2Text";
import SubProjComponent from "../components/subProj";
import H1TextSpan from "../components/h1Text";
import ArrowCirclePointer from "../components/arrowCircle";
//components
const FirstDiv = styled.div`
  background-color: ${({ theme }) => theme.colors.background};

  h1 {
    font-size: 6rem;
  }
  h2 {
    font-size: 3rem;
    span {
      font-size: 3.6rem;
    }
  }

  @media (max-width: 1100px) {
    h1 {
      font-size: 5.2rem;
    }
    h2 {
      font-size: 2.6rem;
      span {
        font-size: 3.12rem;
      }
    }
  }
  @media (max-width: 600px) {
    h1 {
      font-size: 3.52rem;
    }
    h2 {
      font-size: 1.76rem;
      span {
        font-size: 2.112rem;
      }
    }
  }
`;
const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.primary};
  @media (max-width: 1100px) {
    margin-top: 9rem;
  }
  @media (max-width: 600px) {
    position: absolute;
    top: 20.1rem;
    width: 70%;
    z-index: -1;
  }
`;
const HomeContainer = styled.div`
  //container de tudo
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary};
  transition: 0.3s ease;

  @media (max-width: 1100px) {
  }
`;

const ExtContainer = styled.div`
  display: grid;
  grid-template-rows: 1;
  grid-template-columns: 1fr 3fr;
  height: 4000px; // aumentar etc...
  width: 100%;

  @media (max-width: 1100px) {
    grid-template-columns: 32px 14fr;
  }
  @media (max-width: 600px) {
  }
`;
const LeftContainer = styled.div`
  border-right: 1px solid ${({ theme }) => theme.colors.secondary};

  min-width: 19rem;
  @media (max-width: 1100px) {
    min-width: 1rem;
  }
  grid-template-columns: 32px 14fr;
  @media (max-width: 600px) {
    border-right: 0px;
    margin-left: 0px;
  }
`;

const RightContainer = styled.div`
  max-width: calc(100% - 3vw - 1rem); //100% do tamanho menos o gap da esquerda
  min-width: 0;

  @media (max-width: 1100px) {
    min-width: 0;
  }
`;

const IntroContainer = styled.div`
  height: 494px;
  position: relative;
  display: flex;
  flex-direction: column;
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
  @media (max-width: 600px) {
    display: none;
  }
`;

const IntroTexts = styled.div`
  margin-left: 1.2rem;
  h1 {
    height: 8rem;
    margin-bottom: -2rem;
  }
  h2 {
    height: 8rem;
  }
  div {
    clip-path: polygon(0% 0%, 100% 0%, 100% 118%, 0% 118%);
  }
  @media (max-width: 1100px) {
    margin-left: 0rem;
    h1 {
      height: 7.5rem;
    }
    h2 {
      height: 8rem;
    }
  }
  @media (max-width: 600px) {
    div {
      clip-path: polygon(0% 0%, 100% 0%, 100% 85%, 0% 85%);
    }
    h1 {
      height: 4rem;
      margin-bottom: -1rem;
    }
    h2 {
      margin-bottom: -1rem;
      height: 8rem;
    }
  }
`;
const IntroIcons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-left: 1.2rem;
  margin-top: -1rem;
  @media (max-width: 600px) {
    margin-left: 0rem;
    margin-top: -1rem;
    * {
      height: 1.3rem;
      width: 1.3rem;
    }
  }
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20rem;
  width: 100%;
  height: 100px;
`;
const LeftArrow = styled.div`
  margin-top: 26rem;
  margin-left: 3rem;

  @media (max-width: 1100px) {
    display: none;
  }
`;

const RightArrow = styled.div`
  margin-left: auto;
  margin-right: 0rem;
  display: none;
  margin-top: 0rem;
  @media (max-width: 1100px) {
    display: block;
  }
  @media (max-width: 600px) {
    margin-top: 4rem;
  }

  @media (max-width: 470px) {
    display: block;
    margin-top: 5rem;
    div {
      border-width: 1px;
      width: 119.1168px;
      height: 119.1168px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    svg {
      height: 44.6688px;
    }
  }
`;

interface HomeProps {
  toggleDarkTheme: () => void;
}

function Home({ toggleDarkTheme }: HomeProps) {
  const containerRef = useRef(null);
  const [isActive, setIsActive] = useState(toggleDarkTheme);
  const [coverLoad, setCoverLoad] = useState(Boolean);
  const { language, translations } = useContext(LanguageContext);
  const { scroll } = useLocomotiveScroll();

  useEffect(() => {
    gsap.from(".intro-texts > div > h1, h2", {
      duration: 1,
      yPercent: 600,
      ease: "power4",
      stagger: 0.2,
      delay: 0.5,
    });
  }, []);

  useEffect(() => {
    if (coverLoad) {
      gsap.to(".intro-texts > div > h1, h2", {
        duration: 1,
        yPercent: -100,
        ease: "power4",
        stagger: 0.2,
        delay: 0.6,
      });
    }
  }, [coverLoad]);

  useEffect(() => {
    gsap.from(".intro-Icons > div", {
      duration: 1,
      yPercent: 35,
      ease: "power4",
      stagger: 0.06,
      delay: 0.6,
    });
  }, []);

  useEffect(() => {
    if (coverLoad) {
      gsap.to(".intro-Icons > div", {
        duration: 1,
        yPercent: -45,
        ease: "power4",
        stagger: 0.06,
        delay: 0.65,
      });
    }
  }, [coverLoad]);

  useEffect(() => {
    const elements = document.querySelectorAll(".toAppear");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.from(entry.target, {
              opacity: 0,
            });
            gsap.to(entry.target, {
              duration: 3,
              opacity: 1,
              ease: "expo.out",
              stagger: 0,
              delay: 0,
              yPercent: -20,
            });
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.4,
      }
    );
    elements.forEach((el) => {
      observer.observe(el);
    });
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <FirstDiv>
      <HomeContainer data-scroll-section>
        <Header
          activePage="home"
          coverLoad={coverLoad}
          setCoverLoad={setCoverLoad}
        />
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
                <LeftArrow>
                  <ArrowCirclePointer shouldRotate={false} />
                </LeftArrow>
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
                    <H1TextSpan
                      classNameTag="h1-text-span-tittle"
                      translations={translations}
                    />
                    <H2TextSpan
                      classNameTag="h2-text-span-tittle"
                      translations={translations}
                    />
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
                  <RightArrow>
                    <ArrowCirclePointer shouldRotate={false} />
                  </RightArrow>
                </IntroContainer>

                <Line />

                <ProjectsContainer>
                  <SubProjComponent
                    className="toAppear"
                    title={"first"}
                    description={"lorem impsum asdfasdf"}
                    imgSrc={"/test.webp"}
                  />
                  <SubProjComponent
                    className="toAppear"
                    title={"second"}
                    description={"lorem impsum asdfasdf"}
                    imgSrc={"/test.webp"}
                  />
                  <SubProjComponent
                    className="toAppear"
                    title={"third"}
                    description={"lorem impsum asdfasdf"}
                    imgSrc={"/test.webp"}
                  />
                  <SubProjComponent
                    className="toAppear"
                    title={"quarter"}
                    description={"lorem impsum asdfasdf"}
                    imgSrc={"/test.webp"}
                  />
                  <H2TextSpan
                    classNameTag="toAppear"
                    translations={translations}
                  />
                </ProjectsContainer>
              </RightContainer>
            </ExtContainer>
          </main>
        </LocomotiveScrollProvider>
      </HomeContainer>
    </FirstDiv>
  );
}

export default Home;
