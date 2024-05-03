import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { LanguageContext } from "../translations/LanguageContext";
import { ThemeContext } from "../theme/ThemeProvider";
import CoverComponent from "./coverPage";
import RevealComponent from "./revealPage";

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
  cursor: pointer;

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

const Header = ({ activePage, coverLoad, setCoverLoad }: { activePage: string, coverLoad: boolean, setCoverLoad: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const { language, translations } = useContext(LanguageContext);
  const [navActive, setNavActive] = useState([false, false, false, false]);

  const routes = ["/", "/about", "/contact"];

  const handleClick = (index: number) => {
    const updatedNavActive = Array(4).fill(false);
    updatedNavActive[index] = true;
    setNavActive(updatedNavActive);

    setCoverLoad(true); //sent this to parent component

    setTimeout(() => {
      window.location.href = routes[index];
    }, 1700);
  };


  return (
    <HeaderContainer>
      <RevealComponent />
      {coverLoad && <CoverComponent />}
      <Navigation>
        <NavLink
          isActive={activePage === "home"}
          onClick={() => handleClick(0)}
        >
          <svg
            width="17px"
            height="17px"
            strokeWidth="1.6"
            viewBox="0 -5 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#000000"
          >
            <path
              d="M1 12H17"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="square"
            ></path>
          </svg>
          {translations.header.navigation.home}
        </NavLink>
        <NavLink
          isActive={activePage === "about"}
          onClick={() => handleClick(1)}
        >
          <svg
            width="17px"
            height="17px"
            strokeWidth="1.6"
            viewBox="0 -5 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#000000"
          >
            <path
              d="M1 12H17"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="square"
            ></path>
          </svg>
          {translations.header.navigation.about}
        </NavLink>
        <NavLink
          isActive={activePage === "contact"}
          onClick={() => handleClick(2)}
        >
          <svg
            width="17px"
            height="17px"
            strokeWidth="1.6"
            viewBox="0 -5 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#000000"
          >
            <path
              d="M1 12H17"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="square"
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
            strokeWidth="1.6"
            viewBox="0 -5 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#000000"
          >
            <path
              d="M1 12H17"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="square"
            ></path>
          </svg>
          {translations.header.navigation.theme}
        </NavLink>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
