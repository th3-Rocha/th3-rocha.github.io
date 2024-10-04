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
  width: 33.33333333333333%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0px -1px 1px ${({ theme }) => theme.colors.background}, 0px 1px 1px ${({ theme }) => theme.colors.background};
  z-index: 98;

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
