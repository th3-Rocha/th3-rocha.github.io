import React, { useContext, useEffect, useState, useRef } from "react";
//third
import styled from "styled-components";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import gsap from "gsap";
//third
//components
import { LanguageContext } from "../translations/LanguageContext";
import IconButtonTheme from "../components/iconButtonTheme";
import Header from "../components/header";
import IconButtonLink from "../components/iconButtonLink";
import PreFooter from "../components/PreFooter";
import H2TextSpan from "../components/h2Text";
import SubProjComponent from "../components/SubProject";
import H1TextSpan from "../components/h1Text";
import ArrowCirclePointer from "../components/ArrowCirclePointer";
import LeftSpanText from "../components/leftSpanText";
import OpenBoxH2 from "../components/openBoxH2";
import Footer from "../components/Footer";
import Sidebar from "../components/sidebar";
import Wrapper from "../components/wrapper";
import Divider from "../components/divider";
import MainContainer from "../components/mainContainer";
import LayoutContainer from "../components/layoutContainer";
import BottomContainer from "../components/bottomContainer";
import BottomLine from "../components/bottomLine";
import Footers from "../components/footers";
import ContentArea from "../components/contentArea";
import TitleSection from "../components/tittleSection";
//components

//UI
import {
  Mail,
  HalfMoon,
  GithubCircle,
  SunLight,
  Linkedin,
} from "iconoir-react";

import "./locomotive-scroll.css";
import CarouselText from "../components/SpanTextCarousel";
import SubProjectLink from "../components/SubProjectLink";

const IntroSection = styled.div`
  height: 494px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const SecondTitleSection = styled.section`
  align-items: flex-start;
  margin-left: 1rem;
  margin-top: 5rem;
  margin-bottom: 1rem;
  display: none;
  @media (max-width: ${({ theme }) => theme.screen.tablet}) {
    display: inline-block;
  }
`;
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
  @media (max-width: ${({ theme }) => theme.screen.tablet}) {
    margin-left: 0.5rem;
    h1 {
      height: 7.5rem;
    }
    h2 {
      height: 8rem;
    }
  }
  @media (max-width: ${({ theme }) => theme.screen.mobile}) {
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

  @media (max-width: ${({ theme }) => theme.screen.tablet}) {
    margin-left: 0.5rem;
  }
  @media (max-width: ${({ theme }) => theme.screen.mobile}) {
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

  @media (max-width: ${({ theme }) => theme.screen.tablet}) {
    display: none;
  }
`;

const ArrowRight = styled.div`
  margin-left: auto;
  margin-right: 0rem;
  display: none;
  margin-top: 0rem;
  @media (max-width: ${({ theme }) => theme.screen.tablet}) {
    display: block;
  }
  @media (max-width: ${({ theme }) => theme.screen.mobile}) {
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
  clip-path: polygon(0% 0%, 100% 0%, 100% 110%, 0% 110%);
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
  @media (max-width: ${({ theme }) => theme.screen.tablet}) {
    display: none;
  }
`;
const H2SimpleText = styled.h2`
  font-optical-sizing: auto;
  letter-spacing: -2px;
  font-weight: 300;
  font-style: normal;
  font-variation-settings: "slnt" 0;
  margin-top: 1rem;
  word-break: keep-all;
  font-family: "Inter", sans-serif;
  vertical-align: baseline;

  letter-spacing: -0.05rem;
  font-weight: 400;
  line-height: 1.5;
`;
const RightTextBellowProjects = styled.div`
  margin-right: 0;
  margin-left: auto;
  margin-top: 5rem;
  width: 80%;
  max-width: 27rem;
  margin-bottom: 10rem;
`;
const ArrowCircleAboutMe = styled.div`
  @media (max-width: ${({ theme }) => theme.screen.mobile}) {
    width: 100%;
    margin: 0;
    margin-left: 100%;
    margin-right: 2rem;
    margin-left: auto;

    width: fit-content;
  }
`;

const CourosselContainer = styled.div`
  width: 400%;
  div {
    margin-top: calc(2rem + 4vw);
    margin-bottom: calc(2rem + 4vw);
  }
`;

interface HomeProps {
  toggleDarkTheme: () => void;
}

function Home({ toggleDarkTheme }: HomeProps) {
  const containerRef = useRef(null);
  //const [isActive, setIsActive] = useState(toggleDarkTheme);
  const [coverLoad, setCoverLoad] = useState(Boolean);
  const [coverMenu, setCoverMenu] = useState(Boolean);
  const { language, translations } = useContext(LanguageContext);
  const { scroll } = useLocomotiveScroll();

  const routes = ["/", "/about", "/contact"];

  const [showCarousel, setShowCarousel] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCarousel(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const handleClickHomeItens = (index: number) => {
    const updatedNavActive = Array(4).fill(false);
    updatedNavActive[index] = true;

    setCoverLoad(true);

    setTimeout(() => {
      const base = routes[index];
      const search = window.location.search || "";
      const nextUrl = search
        ? base.includes("?")
          ? `${base}&${search.slice(1)}`
          : `${base}${search}`
        : base;
      window.location.href = nextUrl;
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
    <Wrapper>
      <MainContainer data-scroll-section>
        <Header
          homeText={translations.header.navigation.homeName}
          youAre={translations.header.navigation.youAre}
          aboutText={translations.header.navigation.about}
          contactText={translations.header.navigation.contact}
          closeText={translations.header.navigation.close}
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
            <LayoutContainer>
              <Sidebar>
                <LeftArrow>
                  {" "}
                  <ArrowCirclePointer shouldAbout={false} />
                </LeftArrow>
                <TitleSection>
                  <LeftSpanText
                    Text={translations.home.detailTitle[0].title}
                    shouldRotate={true}
                  />
                </TitleSection>
              </Sidebar>
              <ContentArea>
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
                  </IntroTextWrapper>
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
                      url="https://www.linkedin.com/in/drcha/"
                      children={<Linkedin />}
                    />
                    <IconButtonTheme
                      children1={<HalfMoon />}
                      children2={<SunLight />}
                      onClick={toggleDarkTheme}
                    />
                  </IntroIconsWrapper>

                  {showCarousel && (
                    <ArrowRight>
                      <ArrowCirclePointer shouldAbout={false} />
                    </ArrowRight>
                  )}
                </IntroSection>

                <Divider />

                <ProjectsWrapper>
                  <SubProjComponent
                    classNameTag="toAppear"
                    title={translations.home.works[0].title}
                    description={translations.home.works[0].description}
                    imgSrc={"/smv.webp"}
                    urlTo="https://smvzap.com/
                    "
                  />
                  <SubProjComponent
                    classNameTag="toAppear"
                    title={translations.home.works[1].title}
                    description={translations.home.works[1].description}
                    imgSrc={"/bloch.webp"}
                    urlTo="https://th3-rocha.github.io/Bloch-sphere-with-React-Three-Fiber"
                  />

                  <SubProjComponent
                    classNameTag="toAppear"
                    title={translations.home.works[2].title}
                    description={translations.home.works[2].description}
                    imgSrc={"/ProjeOlha.webp"}
                    urlTo="https://olhaozap.ai"
                  />
                  <SubProjComponent
                    classNameTag="toAppear"
                    title={translations.home.works[3].title}
                    description={translations.home.works[3].description}
                    imgSrc={"/wombo.webp"}
                    urlTo=""
                  />
                  <SubProjectLink
                    classNameTag="toAppear"
                    title={translations.home.works[4].title}
                    description={translations.home.works[4].description}
                    urlTo="https://github.com/th3-Rocha/DeRot"
                  />
                  <SubProjectLink
                    classNameTag="toAppear"
                    title={translations.home.works[5].title}
                    description={translations.home.works[5].description}
                    urlTo="https://github.com/th3-Rocha/TAMJ---Procedural"
                  />
                  <SubProjectLink
                    classNameTag="toAppear"
                    title={translations.home.works[6].title}
                    description={translations.home.works[6].description}
                    urlTo="https://elrocha.itch.io/wcr"
                  />
                  {/* -------end of projects ---------- */}

                  <AfterProjects>
                    <SecondTitleSection>
                      <LeftSpanText
                        Text={translations.home.detailTitle[1].title}
                        shouldRotate={false}
                      />
                    </SecondTitleSection>
                    <ProjectHeader>
                      <PivotSpanWrapper>
                        <AbRotatedSpan>
                          {translations.home.detailTitle[1].title}
                        </AbRotatedSpan>
                      </PivotSpanWrapper>
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
                  </AfterProjects>
                  <RightTextBellowProjects>
                    <AboutSectionClipPath>
                      <H2SimpleText>
                        {translations.home.SparkMensage}
                      </H2SimpleText>
                    </AboutSectionClipPath>
                    <div onClick={() => handleClickHomeItens(1)}>
                      <ArrowCircleAboutMe>
                        <ArrowCirclePointer shouldAbout={true} />
                      </ArrowCircleAboutMe>
                    </div>
                  </RightTextBellowProjects>
                </ProjectsWrapper>
              </ContentArea>
            </LayoutContainer>
            <BottomLine></BottomLine>

            <BottomContainer>
              <CourosselContainer>
                <CarouselText></CarouselText>
              </CourosselContainer>
              <Footers>
                <div>
                  <PreFooter
                    onContactClick={() => handleClickHomeItens(2)}
                    ContactText={translations.footer.ContactText}
                    WantText={translations.footer.WantText}
                  />
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
      </MainContainer>
    </Wrapper>
  );
}

export default Home;
