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
  width: 33%;
  height: 100%;
  background-color: black;
  border-right: 1px solid #F5F5F5;
  border-top: 1px solid #F5F5F5;
`;

const CoverComponent = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(".rectangle", {
      scaleY: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power2.out",
      y: "100%", // Move from bottom to top
      delay: 0.1,
    });
  }, []);

  return (
    <Wrapper>
        <Rectangle className="rectangle" />
        <Rectangle className="rectangle" />
        <Rectangle className="rectangle" />
    </Wrapper>
  );
};

export default CoverComponent;
