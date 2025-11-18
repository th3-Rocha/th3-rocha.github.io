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
import { useNavigate } from "react-router-dom"; // Importe useNavigate

import CoverComponent from "../components/coverPage";
import RevealComponent from "../components/revealPage";
//components
import ContactPreFooter from "../components/contactPreFooter";
import H2TextSpan from "../components/h2Text";
import ArrowCirclePointer from "../components/ArrowCirclePointer";
import Footer from "../components/Footer";
import { env } from "process";

import Sidebar from "../components/sidebar";
import Wrapper from "../components/wrapper";
import MainContainer from "../components/mainContainer";
import LayoutContainer from "../components/layoutContainer";
import BottomContainer from "../components/bottomContainer";
import Footers from "../components/footers";
import ContentArea from "../components/contentArea";
import Divider from "../components/divider";
import H1TextSpan from "../components/h1Text";
//components

//ia
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const AboutSectionClipPath = styled.div`
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  max-width: 45rem;
  margin-left: 1rem;
  height: fit-content;
  h2 {
    font-size: 1.2rem;
  }
  margin-bottom: 0rem;
`;

const H2SimpleText = styled.h2`
  font-optical-sizing: auto;
  letter-spacing: -2px;
  font-weight: 300;
  font-style: normal;
  font-variation-settings: "slnt" 0;
  word-break: keep-all;
  font-family: "Inter", sans-serif;
  vertical-align: baseline;
  letter-spacing: -0.05rem;
  font-weight: 400;
  line-height: 1.5;
  max-width: 18rem;
`;

const IntroSection = styled.div`
  height: fit-content;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const ContactFormDiv = styled.div`
  margin-left: 0px;
`;
const DividerDiv = styled.div`
  div {
    width: 100%;
    margin-top: 1rem;
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
const SubTittle = styled.div`
  @media (max-width: 600px) {
    h2 {
      display: none;
    }
    height: 5rem;
  }
`;
const TextCourosselContainer = styled.div`
  width: 400%;
  height: calc(8rem + 9vw);
  div {
  }
`;
//contact form
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 80%;
  margin: 2rem auto;
  margin-left: 1rem;
  h1 {
    margin: 0;
    font-size: 3rem;
  }
  input,
  textarea {
    font-family: "Inter", sans-serif;
    width: 100%;
    font-weight: 500;
    padding: 0.5rem;
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.background};
    border-radius: 0px;
    font-size: 1.1rem;
  }
  input:focus,
  textarea:focus {
    outline: none;
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px ${({ theme }) => theme.colors.secondary}
      inset !important;
    -webkit-text-fill-color: ${({ theme }) => theme.colors.primary} !important;

    font-family: "Inter", sans-serif !important;
  }
  textarea {
    height: 30rem;
    resize: none;
  }

  button {
    margin-top: 1rem;
    padding: 0.75rem;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
    cursor: pointer;
    border: 2px;
    border-color: ${({ theme }) => theme.colors.primary};
    border-style: solid;
    border-radius: 0px;
    font-size: 1rem;
    transition: 0.3s;
    &:hover {
      background-color: ${({ theme }) => theme.colors.background};
      color: ${({ theme }) => theme.colors.primary};
      border: 2px;
      border-color: ${({ theme }) => theme.colors.primary};
      border-style: dashed;
    }
  }
`;

const MensaggeHeader = styled.div`
  display: flex;
  margin: 0rem;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 0.5rem;
`;
//contatct form
interface AboutProps {
  toggleDarkTheme: () => void;
}

function Contact({ toggleDarkTheme }: AboutProps) {
  const containerRef = useRef(null);
  const [coverLoad, setCoverLoad] = useState(Boolean);
  const [coverMenu, setCoverMenu] = useState(Boolean);
  const [opharaimText, setOpharaimText] = useState("Don't be afraid");
  const [AiFillText, setAiFillText] = useState("");
  const [opharimClicked, setOpharimClicked] = useState(false);
  const { language, translations } = useContext(LanguageContext);
  const routes = ["/", "/about", "/contact"];
  const [showCarousel, setShowCarousel] = useState(false);
  //contactForm
  const navigate = useNavigate();
  const [email, setEmail] = useState(String);
  const [name, setName] = useState(String);
  const [message, setMessage] = useState(String);
  //contactForm
  useEffect(() => {
    if (opharimClicked) {
      const fetchData = async () => {
        try {
          const prompt = translations.contact.promtForGem;
          const result = await model.generateContent([prompt]);
          setOpharaimText(result.response.text());
          console.log(result.response.text());
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }
  }, [opharimClicked]);
  //
  const handleOpharimClick = () => {
    if (window.innerWidth >= 700) {
      setOpharimClicked(true);
    } else {
      setOpharimClicked(false);
    }
  };
  //

  const handleFillAiClick = () => {
    if (!email || !name) {
      alert("Please fill in all fields.");
      return;
    }
    const fetchData = async () => {
      try {
        const prompt = `Escreva um e-mail educado para Murilo da Rocha dizendo que você quer contratá-lo após ver seu portfólio. Meu nome é ${name}. Não inclua o assunto, evite exageros nos elogios e não quebre linhas.`;

        const result = await model.generateContent([prompt]);
        setAiFillText(result.response.text());
        setMessage(result.response.text());
        console.log(result.response.text());
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  };
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
              <Sidebar></Sidebar>
              <ContentArea>
                <IntroSection>
                  {" "}
                  <IntroTextWrapper>
                    <H2TextSpan
                      classNameTag="h2-text-span-tittle"
                      Text={""}
                      TextHighlight={translations.contact.title}
                    />
                  </IntroTextWrapper>
                  <AboutSectionClipPath>
                    <SubTittle>
                      <H2SimpleText>
                        {" "}
                        {translations.contact.subTitle}
                      </H2SimpleText>
                    </SubTittle>
                  </AboutSectionClipPath>
                </IntroSection>
                <DividerDiv>
                  <Divider />
                </DividerDiv>
              </ContentArea>
              <Sidebar></Sidebar>
              <ContactFormDiv>
                <FormContainer>
                  <form name="contact" action="/sucess" method="POST">
                    <input type="hidden" name="form-name" value="contact2" />
                    <input
                      type="hidden"
                      name="subject"
                      value="Contact Form from Portfolio"
                    />
                    <H1TextSpan Text="Email" />
                    <div className="input">
                      <label htmlFor="email"></label>
                      <input
                        name="email"
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <H1TextSpan Text="Name" />
                    <div className="input">
                      <label htmlFor="name"></label>
                      <input
                        name="name"
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <MensaggeHeader>
                      <H1TextSpan Text="Message" />
                    </MensaggeHeader>
                    <div>
                      <label form="message"></label>
                      <textarea
                        name="message"
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                      />
                    </div>
                    <button type="submit">Send Message</button>
                  </form>
                </FormContainer>
              </ContactFormDiv>
            </LayoutContainer>
            <BottomContainer>
              <Footers>
                <div>
                  <ContactPreFooter
                    onContactClick={() => handleOpharimClick()}
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
