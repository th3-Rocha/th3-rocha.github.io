import React, { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

import "./locomotive-scroll.css";

import Wrapper from "../components/wrapper";
import MainContainer from "../components/mainContainer";
import SucessModal from "../components/modal";
//components

//contatct form

interface AboutProps {
  toggleDarkTheme: () => void;
}

function Sucess({ toggleDarkTheme }: AboutProps) {
  const containerRef = useRef(null);
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
