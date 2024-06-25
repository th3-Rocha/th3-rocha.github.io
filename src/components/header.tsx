import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { LanguageContext } from "../translations/LanguageContext";
import { ThemeContext } from "../theme/ThemeProvider";
import CoverComponent from "./coverPage";
import RevealComponent from "./revealPage";
import H1TextSpan from "./h1Text";
import MinusSvgIcon from "./minusIcon";
import PlusSvgIcon from "./plusIcon";
import gsap from "gsap";

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 2.3rem;
  left: 0.5rem;
  z-index: 9;
  font-size: 1rem;
  font-weight: 400;
  line-height: 0.9;
  margin-top: 1rem;
  font-family: "Inter", sans-serif;
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
  top: 0;
  left: 0;
  background-color: black;
  pointer-events: none;
`;
const GridDiv = styled.div`
  color: #ffffff;
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
  border: 1px solid #ffffff33;
  border-top: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    clip-path: polygon(0% 0%, 100% 0%, 110% 100%, 0% 100%);
    div {
      display: flex;
      flex-direction: row;
      align-items: center;

      h1 {
        cursor: pointer;
        margin-top: 0rem;
        margin-left: 1rem;
      }
      div {
        span {
          margin-left: 0.5rem;
          color: #ffffff71;
        }
      }
    }
  }
`;
const RightGridDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 13fr;
`;
const RightSectionDiv = styled.div`
  border-top: 1px solid #ffffff33;
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
  ///////////////////////COVERMENU//////////////////
  const [trigger, setTrigger] = useState(false);
  const handleClose = () => {
    setTrigger(true);
    setTimeout(() => {
      setCoverMenu(false);
    }, 400);
  };

  useEffect(() => {
    if (!trigger) {
      //entering
      gsap.from(".rectangleMenu", {
        scaleY: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        y: "-100%",
        delay: 0.0,
        opacity: 1,
      });

      gsap.from(".toAppear2", {
        duration: 1,
        yPercent: -100,
        ease: "power4",
        stagger: 0.1,
      });
    } else {
      gsap.to(".rectangleMenu", {
        //exiting
        scaleY: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        y: "-100%",
        delay: 0.0,
      });
      gsap.to(".toAppear2", {
        duration: 1,
        yPercent: -100,
        ease: "power4",
        stagger: 0,
      });
    }
  }, [coverMenu, trigger]);
  ///////////////
  const handleClickMenu = () => {
    setTrigger(false);
    setCoverMenu(true);
  };

  if (isMobile) {
    return (
      <HeaderContainer>
        <RevealComponent />
        {coverMenu && (
          <Wrapper>
            <Rectangle className="rectangleMenu" />
            <GridDiv>
              <LeftDiv></LeftDiv>
              <MidGridDiv>
                <MidSectionDiv onClick={() => handleClick(0)}>
                  <div>
                    <div>
                      <H1TextSpan Text="Home" classNameTag="toAppear2" />
                      {activePage === "home" && (
                        <div>
                          <span className="toAppear2">You are here</span>
                        </div>
                      )}
                    </div>
                  </div>
                </MidSectionDiv>
                <MidSectionDiv onClick={() => handleClick(1)}>
                  <div>
                    <div>
                      <H1TextSpan Text="About" classNameTag="toAppear2" />
                      {activePage === "about" && (
                        <div>
                          <span className="toAppear2">You are here</span>
                        </div>
                      )}
                    </div>
                  </div>
                </MidSectionDiv>
                <MidSectionDiv onClick={() => handleClick(2)}>
                  <div>
                    <div>
                      <H1TextSpan Text="Contact" classNameTag="toAppear2" />
                      {activePage === "contact" && (
                        <div>
                          <span className="toAppear2">You are here</span>
                        </div>
                      )}
                    </div>
                  </div>
                </MidSectionDiv>
              </MidGridDiv>
              <RightGridDiv>
                <CloseDiv onClick={handleClose}>
                  <span onClick={handleClose}>Close</span>
                </CloseDiv>
                <RightSectionDiv></RightSectionDiv>
              </RightGridDiv>
            </GridDiv>
          </Wrapper>
        )}
        {coverLoad && <CoverComponent />}
        <NavLinkMenu onClick={() => handleClickMenu()}>
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

        </Navigation>
      </HeaderContainer>
    );
  }
};

export default Header;
