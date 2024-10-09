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
import SucessModal from "../components/modal";
//components

//contatct form

interface AboutProps {
  toggleDarkTheme: () => void;
}

function Sucess({ toggleDarkTheme }: AboutProps) {
  const containerRef = useRef(null);
  const [coverLoad, setCoverLoad] = useState(Boolean);
  const [coverMenu, setCoverMenu] = useState(Boolean);
  const { language, translations } = useContext(LanguageContext);
  const { scroll } = useLocomotiveScroll();
  const routes = ["/", "/about", "/contact"];
  //contactForm

  return (
    <Wrapper>
      <MainContainer data-scroll-section>
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
          <SucessModal/>
          </main>
        </LocomotiveScrollProvider>
      </MainContainer>
    </Wrapper>
  );
}

export default Sucess;
