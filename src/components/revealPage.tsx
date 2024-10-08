import React, { useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";

import { ThemeContext } from "../theme/ThemeProvider";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 101vw;
  height: 103vh;
  z-index: 99;
  pointer-events: none;
  display: flex;
`;

const Rectangle = styled.div`
  width: 33.333333333333%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  z-index: 98;
  box-shadow: 0px -1px 1px ${({ theme }) => theme.colors.background}, 0px 1px 1px ${({ theme }) => theme.colors.background};
`;

const RevealComponent = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(".rectangle", {
      scaleY: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power2.inOut",
      y: "-100%",
      delay: 0.1,  
    });
  }, []);

  return (
    <Wrapper>
        <Rectangle className="rectangle" color="#ff5733" />
        <Rectangle className="rectangle" color="#33ff57" />
        <Rectangle className="rectangle" color="#5733ff" />
    </Wrapper>
  );
};

export default RevealComponent;
