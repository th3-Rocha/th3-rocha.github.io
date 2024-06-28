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
import LeftSpanText from "../components/leftSpanText";
import OpenBoxH2 from "../components/openBoxH2";
import ImageCarousel from "../components/carouselComp";
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
  width: 100%;

  @media (max-width: 1100px) {
    grid-template-columns: 32px 14fr;
  }
  @media (max-width: 600px) {
  }
`;
const LeftContainer = styled.div`
  border-right: 1px solid ${({ theme }) => theme.colors.secondary};
  height: 100%;
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

const SecTitle3 = styled.section`
  align-items: flex-start;
  margin-left: 1rem;
  margin-top: 5rem;
  margin-bottom: 1rem;
  display: none;
  @media (max-width: 1100px) {
    display: inline-block;
  }
`;
const images = [
  "https://placehold.co/800",
  "https://placehold.co/800",
  "https://placehold.co/800",
  "https://placehold.co/800",
  "https://placehold.co/800",
  "https://placehold.co/800",
  "https://placehold.co/800",
  "https://placehold.co/800",
  "https://placehold.co/800",
  "https://placehold.co/800",
  "https://placehold.co/800",
  "https://placehold.co/800",
];
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
  height: max-content;
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

const AfterProjectsDiv = styled.div``;

const H2Projects = styled.div`
  margin-left: 1rem;
  margin-top: 1rem;
`;
const OuterH2Clippath = styled.div`
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 110%);
  width: 50vw;
  -ms-grid-columns: min-content;
  overflow-wrap: break-word;
  div {
    opacity: 0;
  }
  @media (max-width: 900px) {
    width: 70vw;
  }
`;

const AboutHomeClipPath = styled.div`
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  h2 {
    font-size: 1.3rem;
    letter-spacing: -0.05rem;
    font-weight: 400;
    line-height: 1.3rem;
  }
  margin-bottom: 3rem;
`;
const LeftSpanText2 = styled.span`
  display: inline-block;
  text-align: center;
  width: 10rem;
  height: 1rem;
  white-space: nowrap;
  font-size: 1rem;
  font-weight: 400;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  font-family: "Inter", sans-serif;
`;

const PivotLeftSpan2 = styled.div`
  display: inline-block;
  transform: rotate(-90deg)
    translate(calc(-100% - 0.5rem), calc(-100% - 2.8rem));
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  @media (max-width: 1100px) {
    display: none;
  }
`;

const RightTextBellowProjects = styled.div`
  margin-right: 0;
  margin-left: auto;
  margin-top: 5rem;
  width: 80%;
  max-width: 27rem;
  margin-bottom: 10rem;
`;

const BottomLine = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.primary};
  margin-left: 3rem;
  margin-right: 3rem;
  width: calc(100% - 6rem);
`;
const BottomContainer = styled.div`
  width: 100%;
  height: 50rem;
`;
const CourosselContainer = styled.div`
  width: 400%;
  div {
    
    margin-top: 8rem;
    margin-bottom: 8rem;
  } //?????????????????
`;
const FooterContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: 10rem;
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

  const routes = ["/", "/about", "/contact"];
  const handleClickHomeItens = (index: number) => {
    const updatedNavActive = Array(4).fill(false);
    updatedNavActive[index] = true;

    setCoverLoad(true);

    setTimeout(() => {
      window.location.href = routes[index];
    }, 1700);
  };

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
        sta2gger: 0.06,
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

  useEffect(() => {
    const elements2 = document.querySelectorAll(".toAppearH2");
    const observer2 = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.from(entry.target, {
              duration: 1,
              yPercent: 600,
              ease: "power4",
              opacity: 0,
            });
            gsap.to(entry.target, {
              duration: 1,
              opacity: 1,
              yPercent: 0,
            });
            observer2.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.8,
      }
    );
    elements2.forEach((el) => {
      observer2.observe(el);
    });
    return () => {
      observer2.disconnect();
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
                  <ArrowCirclePointer shouldAbout={false} />
                </LeftArrow>
                <SecTitle>
                  <LeftSpanText
                    Text={translations.home.detailTitle[0].title}
                    shouldRotate={true}
                  />
                </SecTitle>
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
                    <ArrowCirclePointer shouldAbout={false} />
                  </RightArrow>
                </IntroContainer>

                <Line />

                <ProjectsContainer>
                  <SubProjComponent
                    classNameTag="toAppear"
                    title={translations.home.works[1].title}
                    description={translations.home.works[1].description}
                    imgSrc={"/blockSphere.png"}
                  />
                  <SubProjComponent
                    classNameTag="toAppear"
                    title={translations.home.works[0].title}
                    description={translations.home.works[0].description}
                    imgSrc={"/PortFolioMobile.png"}
                  />

                  <SubProjComponent
                    classNameTag="toAppear"
                    title={translations.home.works[2].title}
                    description={translations.home.works[2].description}
                    imgSrc={"/galeryIA.png"}
                  />
                  <SubProjComponent
                    classNameTag="toAppear"
                    title={translations.home.works[3].title}
                    description={translations.home.works[3].description}
                    imgSrc={"/pokedex.png"}
                  />
                  {/* -------end of projects ---------- */}

                  <AfterProjectsDiv>
                    <SecTitle3>
                      <LeftSpanText
                        Text={translations.home.detailTitle[1].title}
                        shouldRotate={false}
                      />
                    </SecTitle3>
                    <H2Projects>
                      <PivotLeftSpan2>
                        <LeftSpanText2>
                          {translations.home.detailTitle[1].title}
                        </LeftSpanText2>
                      </PivotLeftSpan2>
                      <OuterH2Clippath>
                        <H2TextSpan
                          classNameTag="toAppearH2"
                          Text={"Delivering "}
                          TextHighlight={"modern, cohesive & intuitive"}
                          Text2={" web solutions."}
                          fontStyle="italic"
                        />
                      </OuterH2Clippath>

                      <OpenBoxH2
                        mainWords={[
                          translations.home.Habilities[0].MainWord,
                          translations.home.Habilities[1].MainWord,
                          translations.home.Habilities[2].MainWord,
                        ]}
                        mainTexts={[
                          translations.home.Habilities[0].MainText,
                          translations.home.Habilities[1].MainText,
                          translations.home.Habilities[2].MainText,
                        ]}
                      />
                    </H2Projects>
                  </AfterProjectsDiv>
                  <RightTextBellowProjects>
                    <AboutHomeClipPath>
                      <H2TextSpan
                        Text="I enjoy designing meaningful experiences for
                      brands & businesses to help them serve their
                      target users."
                      />
                    </AboutHomeClipPath>
                    <div onClick={() => handleClickHomeItens(1)}>
                      <ArrowCirclePointer shouldAbout={true} />
                    </div>
                  </RightTextBellowProjects>
                </ProjectsContainer>
              </RightContainer>
            </ExtContainer>
            <BottomLine></BottomLine>

            <BottomContainer>
              <CourosselContainer>
                <ImageCarousel images={images} />
              </CourosselContainer>
              <FooterContainer></FooterContainer>
            </BottomContainer>
          </main>
        </LocomotiveScrollProvider>
      </HomeContainer>
    </FirstDiv>
  );
}

export default Home;
