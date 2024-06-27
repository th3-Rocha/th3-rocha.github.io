import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import PlusIcon from "./plusIcon";
import { ThemeContext } from "../theme/ThemeProvider";
import H1TextSpan from "./h1Text";
import H2TextSpan from "./h2Text";
import MinusSvgIcon from "./minusIcon";

const ExtContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

interface DownContainerProps {
  isOpen: boolean;
}

const ClipPathing = styled.div`
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 1rem;

    div {
      span {
        font-weight: 300;
        font-size: 3rem;
      }
      h2 {
        font-size: 2rem;
        font-weight: 200;
      }
    }
    small {
      margin-left: 1.9rem;
      h2 {
        font-size: 2rem;
        font-weight: 300;
      }
    }
  }
  svg {
    margin-right: 0.5rem;
    width: 1.5rem;
    height: 1.5rem;
  }
`;
const UpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-left: 0rem;
  opacity: 0;
  div {
    svg {
      transform: translatex(-1rem);
    }
  }
`;
const UnitContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  cursor: pointer;
  margin-bottom: 1.5rem;
`;

const DownContainer = styled.div<DownContainerProps>`
  margin-left: 4.5rem;
  max-width: 29rem;
  align-self: flex-start;
  font-size: 0.9rem;
  overflow: hidden;
  max-height: ${({ isOpen }) => (isOpen ? "5rem" : "0")};
  transition: max-height 0.3s;
  span {
    text-align: justify;
    text-justify: inter-word;
  }
`;

const IntraBorder = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  height: 1px;
  width: 0;
  margin-left: 0;
  transform: translatex(-1rem);
  transform-origin: left; /* Ensure growth from left to right */
  transition: width 1s;
`;

interface OpenBoxH2Props {
  mainWords: string[];
  mainTexts: string[];
}

const OpenBoxH2: React.FC<OpenBoxH2Props> = ({ mainWords, mainTexts }) => {
  const [isOpen, setIsOpen] = useState([false, false, false]);
  const borderRefs = useRef<(HTMLDivElement | null)[]>([]);
  const upContainerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleOpen = (index: number) => {
    setIsOpen((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(entry.target, {
              width: "calc(100% + 1rem)",
              transformOrigin: "left",
            });
          }
        });
      },
      { threshold: 0.5 }
    );
    const observerText = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.from(entry.target, {
              duration: 1,
              yPercent: 600,
              ease: "power4",
              opacity: 0,
            });
            gsap.to(entry.target, {
              duration: 1,
              opacity: 1,
              yPercent: 0,
            });
            observerText.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.8 }
    );

    borderRefs.current.forEach((border) => {
      if (border) {
        observer.observe(border);
      }
    });

    upContainerRefs.current.forEach((upContainer) => {
      if (upContainer) {
        observerText.observe(upContainer);
      }
    });

    return () => {
      borderRefs.current.forEach((border) => {
        if (border) {
          observer.unobserve(border);
        }
      });

      upContainerRefs.current.forEach((upContainer) => {
        // Unobeserve but its not necessary
        if (upContainer) {
          observerText.unobserve(upContainer);
        }
      });
    };
  }, []);

  return (
    <ExtContainer>
      {mainWords.map((word, index) => (
        <React.Fragment key={index}>
          <UnitContainer onClick={() => toggleOpen(index)}>
            <ClipPathing>
              <UpContainer ref={(el) => (upContainerRefs.current[index] = el)}>
                <div>
                  <H2TextSpan
                    TextHighlight={`0${index + 1}`}
                    Text2="/"
                    fontStyle="italic"
                  />
                  <small>
                    <H2TextSpan Text={word} />
                  </small>
                </div>
                <div>{isOpen[index] ? <MinusSvgIcon /> : <PlusIcon />}</div>
              </UpContainer>
            </ClipPathing>
            <DownContainer isOpen={isOpen[index]}>
              <span>{mainTexts[index]}</span>
            </DownContainer>
          </UnitContainer>
          <IntraBorder ref={(el) => (borderRefs.current[index] = el)} />
        </React.Fragment>
      ))}
    </ExtContainer>
  );
};

export default OpenBoxH2;
