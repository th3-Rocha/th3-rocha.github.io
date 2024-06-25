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
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: black;
  pointer-events: none;
`;
const GridDiv = styled.div`
  pointer-events: auto;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1.3fr 30fr 6fr;
  grid-template-rows: 1fr;
`;
const LeftDiv = styled.div``;
const MidGridDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
`;
const MidSectionDiv = styled.div`
  border: 1px solid #f5f5f5;
  border-top: 0px;
`;
const RightGridDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 13fr;
`;
const RightSectionDiv = styled.div`
  border-top: 1px solid #f5f5f5;
`;

const CloseDiv = styled.div`
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  span {
    cursor: pointer;
    color: #f5f5f5;
  }
`;

const HeaderCoverComponent = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(".rectangleMenu", {
      scaleY: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out",
      y: "-100%",
      delay: 0.0,
    });
  }, []);

  const handleClose = () => {
    const tl = gsap.timeline();
    tl.to(".rectangleMenu", {
      scaleY: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out",
      y: "-100%",
      delay: 0.0,
    });
  };

  return (
    <Wrapper>
      <Rectangle className="rectangleMenu" />
      <GridDiv>
        <LeftDiv></LeftDiv>
        <MidGridDiv>
          <MidSectionDiv></MidSectionDiv>
          <MidSectionDiv></MidSectionDiv>
          <MidSectionDiv></MidSectionDiv>
        </MidGridDiv>
        <RightGridDiv>
          <CloseDiv onClick={handleClose}>
            <span onClick={handleClose}>Close</span>
          </CloseDiv>
          <RightSectionDiv></RightSectionDiv>
        </RightGridDiv>
      </GridDiv>
    </Wrapper>
  );
};

export default HeaderCoverComponent;
