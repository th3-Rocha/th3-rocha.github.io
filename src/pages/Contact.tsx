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
import ContactPreFooter from "../components/contactPreFooter";
import H2TextSpan from "../components/h2Text";
import H1TextSpan from "../components/h1Text";
import ArrowCirclePointer from "../components/ArrowCirclePointer";
import LeftSpanText from "../components/leftSpanText";
import SpanText from "../components/SpanText";
import CarouselText from "../components/SpanTextCarousel";
import Footer from "../components/Footer";
import ImageAbout from "../components/aboutImageContainer";
import ArrowAspas from "../components/ArrowAspas";
import OphanimMeme from "../components/OphanimMeme";
import { env } from "process";
//components

//ia
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
console.log("akejalkjsfkey:");
console.log(env.API_KEY);


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
  @media (max-width: 600px) {
    display: inline-block;
    margin-top: 0rem;
  }
`;
const TitleSection = styled.section`
  align-items: flex-start;
  display: flex;
  justify-content: flex-end;
  margin-right: -6.5rem;
  margin-top: 55rem;
  @media (max-width: 1100px) {
    display: none;
  }
`;

const IntroTextWrapper = styled.div`
  margin-left: 1rem;
  margin-top: 8rem;
  max-width: 90rem;
  width: 100%;
  h1 {
    height: 2rem;
    margin-bottom: -2rem;
    font-size: calc(5rem + 0.5vw);
  }
  h2 {
    font-size: calc(5rem + 0.5vw);
    height: 2rem;

    span {
      font-size: calc(6rem + 0.5vw);
    }
  }

  div {
    clip-path: polygon(0% 0%, 100% 0%, 100% 270%, 0% 270%);
  }
  @media (max-width: 1300px) {
    margin-left: 0.5rem;
    h1 {
      height: 3rem;
      font-size: calc(4rem + 0.5vw);
    }
    h2 {
      font-size: calc(4rem + 0.5vw);
      height: 3rem;
      span {
        font-size: calc(5rem + 0.5vw);
      }
    }
  }
  @media (max-width: 1100px) {
    margin-left: 0.5rem;
    width: 100%;
    margin-bottom: 0;
    h1 {
      height: 2rem;
      font-size: calc(4rem);
    }
    h2 {
      font-size: calc(4rem);
      height: 2rem;
      span {
        font-size: calc(5rem);
      }
    }
  }
  @media (max-width: 610px) {
    h2 {
      font-size: calc(2.5rem);

      span {
        font-size: calc(2.6rem);
      }
    }
    margin-bottom: 1rem;
    h1 {
      height: 2.5rem;
      font-size: calc(3rem);
    }
    h2 {
      font-size: calc(3rem);
      height: 2rem;
      span {
        font-size: calc(3.5rem);
      }
    }
  }
  @media (max-width: 450px) {
    margin-bottom: 1rem;
  }
`;
const LeftArrow = styled.div`
  margin-top: 26rem;
  margin-left: 3rem;

  @media (max-width: 1100px) {
    display: none;
  }
`;
const ArtContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 10rem;
  height: 10rem;
  border-left: 1px solid ${({ theme }) => theme.colors.footerLine};
`;
const LeftAspas = styled.div`
  width: min-content;
  display: block;
  margin-left: 10rem;
  margin-right: 2.5rem;
  margin-left: auto;
  margin-top: 10rem;

  @media (max-width: 1100px) {
    display: none;
  }
`;
const LeftAspasInside = styled.div`
  width: min-content;
  display: none;

  margin-right: 99rem;
  margin-left: 1rem;
  margin-right: auto;
  div {
    border-width: 2px;
    width: 119.1168px;
    height: 119.1168px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  svg {
    height: 43.6688px;
  }
  @media (max-width: 1100px) {
    display: block;
  }
`;

const ArrowRight = styled.div`
  margin-left: 900rem;
  display: none;
  margin-right: 3rem;
  margin-left: auto;
  width: fit-content;
  transform: translateY(50%);
  z-index: 14;
  @media (max-width: 1100px) {
    display: block;
    position: relative;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;

const ArrowRightAboveImage = styled.div`
  margin-left: 900rem;
  display: none;
  margin-right: 3rem;
  margin-left: auto;
  margin-top: 0;
  width: fit-content;
  transform: translateY(-50%);
  z-index: 14;
  @media (max-width: 600px) {
    display: block;
    position: relative;
    div {
      border-width: 1px;
      width: 119.1168px;
      height: 119.1168px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    svg {
      height: 43.6688px;
    }
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
  height: calc(8rem + 9vw);
  div {
  }
`;

const Footers = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
`;

interface AboutProps {
  toggleDarkTheme: () => void;
}

function Contact({ toggleDarkTheme }: AboutProps) {
  const containerRef = useRef(null);
  const [coverLoad, setCoverLoad] = useState(Boolean);
  const [coverMenu, setCoverMenu] = useState(Boolean);
  const [opharaimText, setOpharaimText] = useState(String);
  const { language, translations } = useContext(LanguageContext);
  const { scroll } = useLocomotiveScroll();
  const routes = ["/", "/about", "/contact"];
  const [showCarousel, setShowCarousel] = useState(false);
  console.log(process.env.API_KEY);
  const fetchData = async () => {
    try {
      const prompt = "finjar ser opraim(anjo) e fale algo";
      const result = await model.generateContent([prompt]);
      setOpharaimText(result.response.text());
      console.log(result.response.text());
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  fetchData();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCarousel(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {}, [showCarousel]);

  const handleClickHomeItens = (index: number) => {
    const updatedNavActive = Array(4).fill(false);
    updatedNavActive[index] = true;

    setCoverLoad(true);

    setTimeout(() => {
      window.location.href = routes[index];
    }, 1700);
  };

  return (
    <Wrapper>
      <MainContainer data-scroll-section>
        <Header
          homeText={translations.header.navigation.homeName}
          youAre={translations.header.navigation.youAre}
          aboutText={translations.header.navigation.about}
          contactText={translations.header.navigation.contact}
          closeText={translations.header.navigation.close}
          activePage="contact"
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
              </Sidebar>
              <ContentArea>
                <IntroSection data-scroll>
                  <IntroTextWrapper>
                    <H2TextSpan
                      classNameTag="h2-text-span-tittle"
                      Text={""}
                      TextHighlight={translations.contact.title}
                    />
                  </IntroTextWrapper>
                  <AboutSectionClipPath>
                    <H2SimpleText>
                      {" "}
                      {translations.contact.subTitle}
                    </H2SimpleText>
                  </AboutSectionClipPath>
                  {/*fim do texto inicial*/}
                </IntroSection>
              </ContentArea>
              <Sidebar></Sidebar>
              <ContentArea></ContentArea>
            </LayoutContainer>
            <BottomContainer>
              <Footers>
                <div>
                  <ContactPreFooter
                    onContactClick={() => handleClickHomeItens(2)}
                    ContactText={translations.footer.ContactText}
                    WantText={opharaimText}
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

export default Contact;
