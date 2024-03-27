import React from "react";
import styled from "styled-components";
import Header from "../components/minimalist/header";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary};;
`;
function About() {
  return (
    <HomeContainer>
      <Header activePage="about"  />
      <span> test About </span>

    </HomeContainer>
  );
}

export default About;
