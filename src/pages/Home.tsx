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
import HeaderCoverComponent from "../components/headerCoverMenu";
//components
import H2TextSpan from "../components/h2Text";
import SubProjComponent from "../components/subProj";
import H1TextSpan from "../components/h1Text";
import ArrowCirclePointer from "../components/arrowCircle";
import LeftSpanText from "../components/leftSpanText";
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
  @media (max-width: 1100px) {
    display: none;
  }
`;

const SecTitle2 = styled.section`
  align-items: flex-start;
  display: flex;
  justify-content: flex-end;
  margin-right: -3rem;
  margin-top: 190vh;
  @media (max-width: 1100px) { //fazer isso ficar perto do h2 do projects
    display: none;
  }
`;

const SecTitle3 = styled.section`
  align-items: flex-start;
  margin-left: 1rem;
  margin-top: 5rem;
  margin-bottom: 3rem;
  display: none;
  @media (max-width: 1100px) {
    display: inline-block;
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
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  }
  @media (max-width: 1100px) {
    margin-left: 0.5rem;
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
  @media (max-width: 1100px) {
    margin-left: 0.5rem;
  }
  @media (max-width: 600px) {
    margin-left: 0.5rem;
    margin-top: 2rem;
    * {
      height: 1.3rem;
      width: 1.3rem;
    }
  }
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 18rem;
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
    margin-top: 0.6rem;
  }

  @media (max-width: 470px) {
    display: block;
    margin-top: 2rem;
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
  const [coverMenu, setCoverMenu] = useState(Boolean);
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
        threshold: 0.8,
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
          coverMenu={coverMenu}
          setCoverMenu={setCoverMenu}
        />

        <LocomotiveScrollProvider
          options={{
            smooth: true,
            getDirection: true,
            getSpeed: true,
            multiplyer: 1,
            inertia: 0.5,
            smoothMobile: true,
            direction: "vertical",
            smartphone: { smooth: true, multiplyer: 2, inertia: 1.1 },
            tablet: { smooth: true, multiplyer: 2, inertia: 1.1 },
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
                  <LeftSpanText
                    Text={translations.home.detailTitle[0].title}
                    shouldRotate={true}
                  />
                </SecTitle>

                <SecTitle2>
                  <LeftSpanText
                    Text={translations.home.detailTitle[1].title}
                    shouldRotate={true}
                  />
                </SecTitle2>
              </LeftContainer>
              <RightContainer>
                <IntroContainer data-scroll>
                  <IntroTexts className="intro-texts">
                    <H1TextSpan
                      classNameTag="h1-text-span-tittle"
                      Text={translations.home.name}
                    />
                    <H2TextSpan
                      classNameTag="h2-text-span-tittle"
                      Text={translations.home.nameDescription}
                      TextHighlight={translations.home.nameDescriptionHighlight}
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
                    title={translations.home.works[0].title}
                    description={translations.home.works[0].description}
                    imgSrc={"/test.webp"}
                  />
                  <SubProjComponent
                    className="toAppear"
                    title={translations.home.works[1].title}
                    description={translations.home.works[1].description}
                    imgSrc={"/test.webp"}
                  />
                  <SubProjComponent
                    className="toAppear"
                    title={translations.home.works[2].title}
                    description={translations.home.works[2].description}
                    imgSrc={"/test.webp"}
                  />
                  <SubProjComponent
                    className="toAppear"
                    title={translations.home.works[3].title}
                    description={translations.home.works[3].description}
                    imgSrc={"/test.webp"}
                  />
                  <SecTitle3>
                    <LeftSpanText
                      classNameTag="toAppear"
                      Text={translations.home.detailTitle[1].title}
                      shouldRotate={false}
                    />
                  </SecTitle3>
                  <H2TextSpan
                    classNameTag="toAppear"
                    Text={"Jogaram uma bomba"}
                    TextHighlight={" No Cabare"}
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
