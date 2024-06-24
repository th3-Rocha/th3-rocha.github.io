import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { LanguageContext } from "../translations/LanguageContext";
import { ThemeContext } from "../theme/ThemeProvider";
import CoverComponent from "./coverPage";
import RevealComponent from "./revealPage";
import HeaderCoverComponent from "./headerCoverMenu";
import MinusSvgIcon from "./minusIcon";
import PlusSvgIcon from "./plusIcon";

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 2.3rem;
  left: 0.5rem;
  z-index: 9;

  @media (max-width: 1100px) {
    top: 2rem;

    left: auto;
    right: 1rem;
  }
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
  mix-blend-mode: difference;
  &:hover {
    opacity: ${(props) => (props.isActive ? "1" : "0.6")};
  }
  svg {
    margin-right: 2px;
    opacity: ${(props) => (props.isActive ? "1" : "0.0")};
    path {
      stroke: ${({ theme }) => theme.colors.text};
    }
  }

  transition: all 0.3s ease;

  @media (max-width: 1100px) {
  }
`;
//menuExpader

const NavLinkMenu = styled.a<NavLinkProps>`
  text-decoration: none;
  margin-left: 1rem;
  color: ${({ theme }) => theme.colors.text};
  mix-blend-mode: difference;
  &:hover {
    cursor: pointer;
  }
  svg {
    margin-right: 2px;
    path {
      stroke: ${({ theme }) => theme.colors.text};
    }
  }

  transition: all 0.3s ease;

  @media (max-width: 1100px) {
  }
`;

///////////////////////COVERMENU////////////////////
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

///////////////////////COVERMENU////////////////////
const Header = ({
  activePage,
  coverLoad,
  setCoverLoad,
  coverMenu,
  setCoverMenu,
}: {
  activePage: string;
  coverLoad: boolean;
  setCoverLoad: React.Dispatch<React.SetStateAction<boolean>>;
  coverMenu: boolean;
  setCoverMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { language, translations } = useContext(LanguageContext);
  const [navActive, setNavActive] = useState([false, false, false, false]);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1100);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const routes = ["/", "/about", "/contact"];
  const handleClick = (index: number) => {
    const updatedNavActive = Array(4).fill(false);
    updatedNavActive[index] = true;
    setNavActive(updatedNavActive);

    setCoverLoad(true);

    setTimeout(() => {
      window.location.href = routes[index];
    }, 1700);
  };

  const handleClickMenu = (index: number) => {
    setCoverMenu(true);
  };

  if (isMobile) {
    return (
      <HeaderContainer>
        <RevealComponent />
        {coverMenu && <HeaderCoverComponent />}
        {coverLoad && <CoverComponent />}
        <NavLinkMenu onClick={() => handleClickMenu(0)}>
          <PlusSvgIcon />
          {"Menu"}
        </NavLinkMenu>
      </HeaderContainer>
    );
  } else {
    //screen larger than 1100px
    return (
      <HeaderContainer>
        <RevealComponent />
        {coverLoad && <CoverComponent />}
        <Navigation>
          <NavLink
            isActive={activePage === "home"}
            onClick={() => handleClick(0)}
          >
            <MinusSvgIcon />
            {translations.header.navigation.home}
          </NavLink>
          <NavLink
            isActive={activePage === "about"}
            onClick={() => handleClick(1)}
          >
            <MinusSvgIcon />
            {translations.header.navigation.about}
          </NavLink>
          <NavLink
            isActive={activePage === "contact"}
            onClick={() => handleClick(2)}
          >
            <MinusSvgIcon />
            {translations.header.navigation.contact}
          </NavLink>

          <NavLink
            isActive={activePage === "theme"}
            href="#"
            onClick={() => handleClick(3)}
          >
            <MinusSvgIcon />
            {translations.header.navigation.theme}
          </NavLink>
        </Navigation>
      </HeaderContainer>
    );
  }
};

export default Header;
