import React from "react";
import styled from "styled-components";
import Header from "../components/header";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary};;
`;
function Contact() {
  return (
    <HomeContainer>
      <Header activePage="contact"  />
      <span> test Home </span>
    </HomeContainer>
  );
}

export default Contact;
