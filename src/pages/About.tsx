import styled from "styled-components";
import { Iconoir } from "iconoir-react";
import {
  Mail,
  Instagram,
  HalfMoon,
  GithubCircle,
  SunLight,
} from "iconoir-react";

import IconButtonTheme from "../components/iconButtonTheme";
import Header from "../components/header";

import React, { useContext, useEffect, useState, useRef } from "react";
import { LanguageContext } from "../translations/LanguageContext";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import TextPlugin from "gsap/TextPlugin";

import "./locomotive-scroll.css";
import gsap from "gsap";
import IconButtonLink from "../components/iconButtonLink";
import { Theme } from "../theme/themes/theme";

import CoverComponent from "../components/coverPage";
import RevealComponent from "../components/revealPage";
//components
import PreFooter from "../components/PreFooter";
import H2TextSpan from "../components/h2Text";
import H1TextSpan from "../components/h1Text";
import ArrowCirclePointer from "../components/ArrowCirclePointer";
import LeftSpanText from "../components/leftSpanText";
import SpanText from "../components/SpanText";
import CarouselText from "../components/SpanTextCarousel";
import Footer from "../components/Footer";
import ImageAbout from "../components/aboutImageContainer";
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
const AfterImage = styled.div`
  margin-left: 1rem;
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
const AboutSectionClipPath = styled.div`
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  max-width: 45rem;
  margin-left: 1rem;

  h2 {
    font-size: 1.2rem;
  }
  margin-bottom: 3rem;
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

const images = "aboutImg.webp";
const IntroTextWrapper = styled.div`
  margin-left: 1rem;
  margin-top: 9rem;
  margin-bottom: 5rem;
  max-width: 90rem;
  h1 {
    height: 8rem;
    margin-bottom: -2rem;
    font-size: calc(5rem + 0.5vw);
  }
  h2 {
    font-size: calc(5rem + 0.5vw);
    height: 8rem;

    span {
      font-size: calc(5rem + 0.5vw);
    }
  }

  div {
    clip-path: polygon(0% 0%, 100% 0%, 100% 250%, 0% 250%);
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
const TextCourosselContainer = styled.div`
  width: 400%;
  height: 16rem;
  div {
  }
`;

const Footers = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
`;

interface AboutProps {
  toggleDarkTheme: () => void;
}

function About({ toggleDarkTheme }: AboutProps) {
  const containerRef = useRef(null);
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
    <Wrapper>
      <MainContainer data-scroll-section>
        <Header
          homeText={translations.header.navigation.homeName}
          youAre={translations.header.navigation.youAre}
          aboutText={translations.header.navigation.about}
          contactText={translations.header.navigation.contact}
          closeText={translations.header.navigation.close}
          activePage="about"
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
          <main
            data-scroll-container
            ref={containerRef}
          >
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
                    <H2TextSpan
                      classNameTag="h2-text-span-tittle"
                      Text={translations.about.intro}
                      TextHighlight={translations.about.introHighlight}
                    />
                  </IntroTextWrapper>
                  {/*fim do texto inicial*/}

                  <ArrowRight>
                    <ArrowCirclePointer shouldAbout={false} />
                  </ArrowRight>
                </IntroSection>
                <ImageAbout
                  imageUrlOverlay={"/overlaynature.png"}
                  imageUrlBackground={"/back1natuertest.png"}
                />
                {/* botar second title */}
                <AfterImage>
                  <H2TextSpan
                    classNameTag="h2-text-span-tittle"
                    Text={translations.about.intro}
                    TextHighlight={translations.about.introHighlight}
                  />
                </AfterImage>

                <AboutSectionClipPath>
                  <H2SimpleText>
                    I am a Mechanical Engg graduate, and curiosity dragged me to
                    learn HTML & CSS. Then, I learned UX/UI design, Reactjs and
                    Webflow, among many other things. Currently, I’m exploring
                    music and audio effects on websites.
                  </H2SimpleText>
                </AboutSectionClipPath>

                <AboutSectionClipPath>
                  <H2SimpleText>
                    I love typography & colours and consider myself a UI design
                    generalist. Depending on the project requirement, I try to
                    opt for a suitable design style—Minimalistic, colourful,
                    typographic, tech, elegant, etc.—while sticking to the core
                    design principles.
                  </H2SimpleText>
                </AboutSectionClipPath>
              </ContentArea>
            </LayoutContainer>
            <BottomLine></BottomLine>
            {/* text courossel */}
            <TextCourosselContainer>
              <CarouselText></CarouselText>
            </TextCourosselContainer>
            <BottomLine></BottomLine>
            <BottomContainer>
              <Footers>
                <div onClick={() => handleClickHomeItens(3)}>
                  <PreFooter
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

export default About;
