import React, { useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";

import { ThemeContext } from "../theme/ThemeProvider";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 101vw;
  height: 100vh;
  z-index: 99;
  gap: 1rem;
  pointer-events: none;
`;

const Rectangle = styled.div`
  width: 33%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  border-right: 1px solid ${({ theme }) => theme.colors.background};
`;

const RectanglesContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
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
      <RectanglesContainer className="rectangles-container">
        <Rectangle className="rectangle" color="#ff5733" />
        <Rectangle className="rectangle" color="#33ff57" />
        <Rectangle className="rectangle" color="#5733ff" />
      </RectanglesContainer>
    </Wrapper>
  );
};

export default CoverComponent;
