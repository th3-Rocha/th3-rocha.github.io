import styled from "styled-components";
import Header from "../components/header";

import React, { useContext, useEffect, useState, useRef } from "react";
import { LanguageContext } from "../translations/LanguageContext";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

import "./locomotive-scroll.css";
//components
import PreFooter from "../components/PreFooter";
import H2TextSpan from "../components/h2Text";
import ArrowCirclePointer from "../components/ArrowCirclePointer";
import LeftSpanText from "../components/leftSpanText";
import CarouselText from "../components/SpanTextCarousel";
import Footer from "../components/Footer";
import ImageAbout from "../components/aboutImageContainer";
import ArrowAspas from "../components/ArrowAspas";
import Sidebar from "../components/sidebar";
import Wrapper from "../components/wrapper";
import MainContainer from "../components/mainContainer";
import LayoutContainer from "../components/layoutContainer";
import BottomContainer from "../components/bottomContainer";
import BottomLine from "../components/bottomLine";
import Footers from "../components/footers";
import ContentArea from "../components/contentArea";
import TitleSection from "../components/tittleSection";
//components
const AspasContainer = styled.div`
  width: 100%;
  height: 22rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
  display: flex;
  flex-direction: column;
  justify-content: end;

  margin-bottom: 0;

  h2 {
    margin-left: 1rem;
    width: 85%;
    margin-block-end: 0em;
  }
  .linkText {
    h2 {
      font-size: 1.2rem;
      text-decoration: underline;
      text-underline-offset: 0.2rem;
    }
    a {
      text-decoration: none;
      color: inherit;
    }
  }
  .mention {
    h2 {
      margin-top: 3rem;
      margin-bottom: 2rem;
      font-size: 1.5rem;
    }
  }
`;

const LastContainer = styled.div`
  width: 100%;
  height: max-content;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
  max-width: 80rem;
  margin-left: 1rem;
  margin-bottom: 0;

  h2 {
    margin-top: 5rem;
    width: 85%;
    margin-block-end: 0em;
  }
  .linkText {
    h2 {
      font-size: 1.2rem;
      text-decoration: underline;
      text-underline-offset: 0.2rem;
      margin-top: 4rem;
      margin-bottom: 0;
    }
    a {
      text-decoration: none;
      color: inherit;
    }
  }
  .lastText {
    margin-bottom: 0;
    height: 10rem;
    h2 {
      margin-top: 3rem;
      font-size: 1.3rem;
    }
  }
  .text {
    h2 {
      margin-top: 3rem;
      font-size: 1.2rem;
    }
  }
`;

const AfterImage = styled.div`
  margin-left: 1rem;
  margin-bottom: 3rem;
  max-width: 60rem;
  h2 {
    line-height: 1;
    font-weight: 300;
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

const IntroTextWrapper = styled.div`
  margin-left: 1rem;
  margin-top: 8rem;
  margin-bottom: 5rem;
  max-width: 90rem;
  width: 100%;
  h1 {
    height: 8rem;
    margin-bottom: -2rem;
    font-size: calc(5rem + 0.5vw);
  }
  h2 {
    font-size: calc(5rem + 0.5vw);
    height: 8rem;

    span {
      font-size: calc(6rem + 0.5vw);
    }
  }

  div {
    clip-path: polygon(0% 0%, 100% 0%, 100% 270%, 0% 270%);
  }
  @media (max-width: 1300px) {
    margin-left: 0.5rem;
    margin-bottom: 2rem;
    h1 {
      height: 7.5rem;
      font-size: calc(4rem + 0.5vw);
    }
    h2 {
      font-size: calc(4rem + 0.5vw);
      height: 8rem;
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
      height: 7.5rem;
      font-size: calc(4rem);
    }
    h2 {
      font-size: calc(4rem);
      height: 8rem;
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
    margin-bottom: 3rem;
    h1 {
      height: 7.5rem;
      font-size: calc(3rem);
    }
    h2 {
      font-size: calc(3rem);
      height: 8rem;
      span {
        font-size: calc(3.5rem);
      }
    }
  }
  @media (max-width: 450px) {
    margin-bottom: 7rem;
  }
`;
const LeftArrow = styled.div`
  margin-top: 26rem;
  margin-left: 3rem;

  @media (max-width: 1100px) {
    display: none;
  }
`;
const LeftAspas = styled.div`
  width: min-content;
  display: inline;
  margin-left: 3rem;

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
    width: 109.1168px;
    height: 109.1168px;
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
  margin-right: 3rem;
  margin-left: auto;
  width: fit-content;
  transform: translateY(50%);
  z-index: 10;
  display: none;
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
  z-index: 5;
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

const TextCourosselContainer = styled.div`
  width: 400%;
  height: calc(8rem + 9vw);
  div {
  }
`;


interface AboutProps {
  toggleDarkTheme: () => void;
}

function About({ toggleDarkTheme }: AboutProps) {
  const containerRef = useRef(null);
  const [coverLoad, setCoverLoad] = useState(false);
  const [coverMenu, setCoverMenu] = useState(false);
  const { translations } = useContext(LanguageContext);

  const routes = ["/", "/about", "/contact"];
  const [showCarousel, setShowCarousel] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCarousel(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleClickHomeItens = (index: number) => {
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
          <main data-scroll-container ref={containerRef}>
            <LayoutContainer>
              <Sidebar>
                <LeftArrow>
                  {" "}
                  <ArrowCirclePointer shouldAbout={false} />
                </LeftArrow>
                <TitleSection>
                  <LeftSpanText Text={"Who I am"} shouldRotate={true} />
                </TitleSection>
              </Sidebar>
              <ContentArea>
                <IntroSection data-scroll>
                  <IntroTextWrapper>
                    <H2TextSpan
                      classNameTag="h2-text-span-tittle"
                      Text={translations.about.intro}
                      TextHighlight={translations.about.introHighlight}
                    />
                  </IntroTextWrapper>
                  {/*fim do texto inicial*/}
                </IntroSection>
                {showCarousel && (
                  <ArrowRight>
                    <ArrowCirclePointer shouldAbout={false} />
                  </ArrowRight>
                )}
                <ImageAbout
                  imageUrlOverlay={"/front.webp"}
                  imageUrlBackground={"/back.webp"}
                />
                {showCarousel && (
                  <ArrowRightAboveImage>
                    <ArrowCirclePointer shouldAbout={false} />
                  </ArrowRightAboveImage>
                )}
                <SecondTitleSection>
                  <LeftSpanText Text={"Who I am"} shouldRotate={false} />
                </SecondTitleSection>
                <AfterImage>
                  <H2SimpleText>{translations.about.aboutMe}</H2SimpleText>
                </AfterImage>

                <AboutSectionClipPath>
                  <H2SimpleText> {translations.about.history}</H2SimpleText>
                </AboutSectionClipPath>

                <AboutSectionClipPath>
                  <H2SimpleText> {translations.about.history2}</H2SimpleText>
                </AboutSectionClipPath>
              </ContentArea>
            </LayoutContainer>
            <BottomLine></BottomLine>
            {showCarousel && (
              <TextCourosselContainer>
                <CarouselText></CarouselText>
              </TextCourosselContainer>
            )}

            <BottomLine></BottomLine>
            <LayoutContainer>
              <Sidebar>
                <LeftAspas>
                  <ArrowAspas></ArrowAspas>
                </LeftAspas>
              </Sidebar>
              <ContentArea>
                <AspasContainer>
                  <div>
                    <LeftAspasInside>
                      <ArrowAspas></ArrowAspas>
                    </LeftAspasInside>
                    <H2TextSpan
                      TextHighlight={translations.about.leonardoQuato}
                      fontStyle="italic"
                    />
                  </div>
                  <div className="mention">
                    <H2SimpleText>- Leonardo da Vinci</H2SimpleText>
                  </div>
                </AspasContainer>
                <LastContainer>
                  <div>
                    <H2TextSpan
                      Text={translations.about.anotherInspirationsTitle}
                    />
                  </div>
                  <div className="lastText">
                    <H2SimpleText>
                      {translations.about.anotherInspirationsText}
                    </H2SimpleText>
                  </div>
                </LastContainer>
              </ContentArea>
            </LayoutContainer>
            <BottomContainer>
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

export default About;
