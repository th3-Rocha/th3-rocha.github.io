import styled from "styled-components";
import { Iconoir } from "iconoir-react";
import {
  Mail,
  Instagram,
  HalfMoon,
  GithubCircle,
  SunLight,
} from "iconoir-react";

import IconButtonTheme from "../components/IconButtonTheme";
import Header from "../components/Header.tsx";

import React, { useContext, useEffect, useState, useRef } from "react";
import { LanguageContext } from "../translations/LanguageContext";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import TextPlugin from "gsap/TextPlugin";

import "./locomotive-scroll.css";
import gsap from "gsap";
import IconButtonLink from "../components/IconButtonLink";
import { Theme } from "../theme/themes/theme";

import CoverComponent from "../components/CoverPage";
import RevealComponent from "../components/RevealPage";
//components
import PreFooter from "../components/PreFooter";
import H2TextSpan from "../components/H2Text";
import SubProjComponent from "../components/SubProject";
import H1TextSpan from "../components/H1Text";
import ArrowCirclePointer from "../components/ArrowCirclePointer";
import LeftSpanText from "../components/LeftSpanText";
import OpenBoxH2 from "../components/OpenBoxH2";
import ImageCarousel from "../components/Carousel";
import Footer from "../components/Footer";
//components
const Wrapper = styled.div`
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
const Divider = styled.div`
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
const MainContainer = styled.div`
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

const LayoutContainer = styled.div`
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
const Sidebar = styled.div`
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

const ContentArea = styled.div`
  max-width: calc(100% - 3vw - 1rem); //100% do tamanho menos o gap da esquerda
  min-width: 0;
  @media (max-width: 1100px) {
    min-width: 0;
  }
`;

const IntroSection = styled.div`
  height: 494px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const TitleSection = styled.section`
  align-items: flex-start;
  display: flex;
  justify-content: flex-end;
  margin-right: -6.5rem;
  margin-top: 7rem;
  @media (max-width: 1100px) {
    display: none;
  }
`;

const SecondTitleSection = styled.section`
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
  "/pokedexMini.webp",
  "/portMini.webp",
  "/pyphoneMine.webp",
  "/quamtumspheremini.webp",
  "/bookioMini.webp",
  "/artMini.webp",
  "/pokedexMini.webp",
  "/portMini.webp",
  "/pyphoneMine.webp",
  "/quamtumspheremini.webp",
  "/bookioMini.webp",
  "/artMini.webp",
];

const urls = [
  "https://th3-rocha.github.io/PokedexSimulator-Page/",
  "https://murilorocha.netlify.app/",
  "https://th3-rocha.github.io/Landing-Page/",
  "https://th3-rocha.github.io/Bloch-sphere-with-React-Three-Fiber/",
  "https://th3-rocha.github.io/Bookio-Page/",
  "https://th3-rocha.github.io/GaleryOfArtAI-Page/",
  "https://th3-rocha.github.io/PokedexSimulator-Page/",
  "https://murilorocha.netlify.app/",
  "https://th3-rocha.github.io/Landing-Page/",
  "https://th3-rocha.github.io/Bloch-sphere-with-React-Three-Fiber/",
  "https://th3-rocha.github.io/Bookio-Page/",
  "https://th3-rocha.github.io/GaleryOfArtAI-Page/",
];
const IntroTextWrapper = styled.div`
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
const IntroIconsWrapper = styled.div`
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

const ProjectsWrapper = styled.div`
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

const ArrowRight = styled.div`
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

const AfterProjects = styled.div``;

const ProjectHeader = styled.div`
  margin-left: 1rem;
  margin-top: 1rem;
`;
const OuterClipPath = styled.div`
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

const AboutSectionClipPath = styled.div`
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  h2 {
    font-size: 1.3rem;
    letter-spacing: -0.05rem;
    font-weight: 400;
    line-height: 1.3rem;
  }
  margin-bottom: 3rem;
`;
const AbRotatedSpan = styled.span`
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

const PivotSpanWrapper = styled.div`
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
  @media (max-width: 1100px) {
    width: 100%;
    margin: 0;
  }
`;
const BottomContainer = styled.div`
  width: 100%;
  height: auto;
`;
const CourosselContainer = styled.div`
  width: 400%;
  div {
    margin-top: 8rem;
    margin-bottom: 8rem;
  }
`;

const Footers = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
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

  const [showCarousel, setShowCarousel] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCarousel(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

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
        threshold: 0.85,
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
    <Wrapper >
      <MainContainer data-scroll-section>
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
            inertia: 0.8,
            smoothMobile: true,
            direction: "vertical",
            smartphone: { smooth: true, multiplyer: 2, inertia: 1.1 },
            tablet: { smooth: true, multiplyer: 2, inertia: 1.1 },
            smoothTouch: true,
          }}
          watch={[]}
          containerRef={containerRef}
        >
          <main data-scroll-container ref={containerRef}>
            <LayoutContainer >
              <Sidebar>
                <LeftArrow>    <ArrowCirclePointer shouldAbout={false} />
                </LeftArrow>
                <TitleSection>
                  <LeftSpanText
                    Text={translations.home.detailTitle[0].title}
                    shouldRotate={true}
                  />
                </TitleSection>
              </Sidebar>
              <ContentArea >
                <IntroSection data-scroll>
                  <IntroTextWrapper className="intro-texts">
                    <H1TextSpan
                      classNameTag="h1-text-span-tittle"
                      Text={translations.home.name}
                    />
                    <H2TextSpan
                      classNameTag="h2-text-span-tittle"
                      Text={translations.home.nameDescription}
                      TextHighlight={translations.home.nameDescriptionHighlight}
                    />
                  </IntroTextWrapper >
                  <IntroIconsWrapper className="intro-Icons">
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
                  </IntroIconsWrapper >
                  <ArrowRight >
                    <ArrowCirclePointer shouldAbout={false} />
                  </ArrowRight >
                </IntroSection >

                <Divider />

                <ProjectsWrapper >
                  <SubProjComponent
                    classNameTag="toAppear"
                    title={translations.home.works[1].title}
                    description={translations.home.works[1].description}
                    imgSrc={"/blockSphere.webp"}
                    urlTo="https://github.com/th3-Rocha/Bloch-sphere-with-React-Three-Fiber"
                  />
                  <SubProjComponent
                    classNameTag="toAppear"
                    title={translations.home.works[0].title}
                    description={translations.home.works[0].description}
                    imgSrc={"/PortFolioMobile.webp"}
                  />

                  <SubProjComponent
                    classNameTag="toAppear"
                    title={translations.home.works[2].title}
                    description={translations.home.works[2].description}
                    imgSrc={"/galeryIA.webp"}
                    urlTo="https://th3-rocha.github.io/GaleryOfArtAI-Page/"
                  />
                  <SubProjComponent
                    classNameTag="toAppear"
                    title={translations.home.works[3].title}
                    description={translations.home.works[3].description}
                    imgSrc={"/pokedex.webp"}
                    urlTo="https://th3-rocha.github.io/PokedexSimulator-Page/"
                  />
                  {/* -------end of projects ---------- */}

                  <AfterProjects >
                    <SecondTitleSection >
                      <LeftSpanText
                        Text={translations.home.detailTitle[1].title}
                        shouldRotate={false}
                      />
                    </SecondTitleSection >
                    <ProjectHeader>
                      <PivotSpanWrapper >
                        <AbRotatedSpan >
                          {translations.home.detailTitle[1].title}
                        </AbRotatedSpan >
                      </PivotSpanWrapper >
                      <OuterClipPath>
                        <H2TextSpan
                          classNameTag="toAppearH2"
                          Text={translations.home.WhatIdoPart1}
                          TextHighlight={translations.home.WhatIdoPart2}
                          Text2={translations.home.WhatIdoPart3}
                          fontStyle="italic"
                        />
                      </OuterClipPath>

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
                    </ProjectHeader>
                  </AfterProjects >
                  <RightTextBellowProjects>
                    <AboutSectionClipPath>
                      <H2TextSpan
                        Text={translations.home.SparkMensage}
                      />
                    </AboutSectionClipPath>
                    <div onClick={() => handleClickHomeItens(1)}>
                      <ArrowCirclePointer shouldAbout={true} />
                    </div>
                  </RightTextBellowProjects>
                </ProjectsWrapper >
              </ContentArea >
            </LayoutContainer >
            <BottomLine></BottomLine>

            <BottomContainer>
              <CourosselContainer>
                {showCarousel && <ImageCarousel urls={urls} images={images} />}
              </CourosselContainer>
              <Footers>
                <div onClick={() => handleClickHomeItens(2)}>
                  <PreFooter ContactText={translations.footer.ContactText}
                    WantText={translations.footer.WantText} />
                </div>

                <Footer
                  Disclaim={translations.footer.Disclaim}
                  ReachText={translations.footer.ReachText}
                  mailUrl={translations.footer.email}
                  instagramUrl={translations.footer.instagram}
                  githubUrl={translations.footer.github}
                />
              </Footers>
            </BottomContainer>
          </main>
        </LocomotiveScrollProvider>
      </MainContainer >
    </Wrapper >
  );
}

export default Home;