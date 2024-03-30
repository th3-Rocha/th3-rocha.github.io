import React, { useContext, useEffect, useState } from "react";

import styled from "styled-components";
import { LanguageContext } from "../translations/LanguageContext";
import { ThemeContext } from "../theme/ThemeProvider";
import CoverComponent from "./coverPage";

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 2.3rem;
  left: 0.5rem;
  z-index: 9;
`;

const Navigation = styled.nav`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.text};
  gap: 0.9rem;
  font-weight: 500;
  letter-spacing: -1px;
  font-size: 1rem;
`;

interface NavLinkProps {
  isActive?: boolean;
}

const NavLink = styled.a<NavLinkProps>`
  text-decoration: none;
  margin-left: 1rem;
  color: ${({ theme }) => theme.colors.text};
  pointer-events: ${(props) => (props.isActive ? "none" : "auto")};
  &:hover {
    opacity: ${(props) => (props.isActive ? "1" : "0.6")};
  }
  svg {
    margin-right: 4px;
    opacity: ${(props) => (props.isActive ? "1" : "0.0")};
    path {
      stroke: ${({ theme }) => theme.colors.text};
    }
  }

  transition: all 0.3s ease;
`;

const Header = ({ activePage }: { activePage: string }) => {
  const { language, translations } = useContext(LanguageContext);
  const [navActive, setNavActive] = useState([false, false, false, false]);

  const handleClick = (index: number) => {
    const updatedNavActive = Array(4).fill(false); // Reset all navActive elements
    updatedNavActive[index] = true; // Set the clicked index to true

    setNavActive(updatedNavActive);
  };

  return (
    <HeaderContainer>
      <Navigation>
        <NavLink
          isActive={activePage === "home"}
          href="/"
          onClick={() => handleClick(0)}
        >
          <svg
            width="17px"
            height="17px"
            stroke-width="1.6"
            viewBox="0 -5 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#000000"
          >
            <path
              d="M1 12H17"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="square"
              stroke-linejoin="square"
            ></path>
          </svg>
          {translations.header.navigation.home}
        </NavLink>
        <NavLink
          isActive={activePage === "about"}
          href="about"
          onClick={() => handleClick(1)}
        >
          <svg
            width="17px"
            height="17px"
            stroke-width="1.6"
            viewBox="0 -5 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#000000"
          >
            <path
              d="M1 12H17"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="square"
              stroke-linejoin="square"
            ></path>
          </svg>
          {translations.header.navigation.about}
        </NavLink>
        <NavLink
          isActive={activePage === "contact"}
          href="contact"
          onClick={() => handleClick(2)}
        >
          <svg
            width="17px"
            height="17px"
            stroke-width="1.6"
            viewBox="0 -5 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#000000"
          >
            <path
              d="M1 12H17"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="square"
              stroke-linejoin="square"
            ></path>
          </svg>
          {translations.header.navigation.contact}
        </NavLink>

        <NavLink
          isActive={activePage === "theme"}
          href="#"
          onClick={() => handleClick(3)}
        >
          <svg
            width="17px"
            height="17px"
            stroke-width="1.6"
            viewBox="0 -5 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#000000"
          >
            <path
              d="M1 12H17"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="square"
              stroke-linejoin="square"
            ></path>
          </svg>
          {translations.header.navigation.theme}
        </NavLink>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
