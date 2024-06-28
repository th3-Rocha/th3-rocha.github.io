import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";

const ArrowCircle = styled.div`
  position: relative;
  width: 160px;
  height: 160px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  transition: none;
  svg {
    height: 60px;
    transition: transform 0.1s;
    path {
      fill: ${({ theme }) => theme.colors.text};
    }
  }
  &:hover {
    cursor: pointer;
  }
`;

const ArrowCirclePointer = ({ shouldAbout }: { shouldAbout: boolean }) => {
  const arrowRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!shouldAbout) return;
    const arrow = arrowRef.current as unknown as SVGElement;
    if (arrow) {
      // Smooth transition for rotation
      gsap.to(arrow, {
        rotation: -120,
        transformOrigin: "center",
        overwrite: "auto",
        duration: 0.1,
        ease: "power4.out",
      });
    }
  }, [shouldAbout]);

  const handleMouseEnter = () => {
    const arrow = arrowRef.current as unknown as SVGElement;
    if (arrow) {
      gsap.to(arrow, {
        transformOrigin: "center",
        overwrite: "auto",
        duration: 0.2,
        ease: "bounce.inOut",
        yoyo: true,
        repeat: 5000,
        rotation: "+=20",
      });
    }
  };

  const handleMouseLeave = () => {
    const arrow = arrowRef.current as unknown as SVGElement;
    if (arrow) {
      gsap.to(arrow, {
        rotation: -120,
        transformOrigin: "center",
        overwrite: "auto",
        duration: 0.2,
        ease: "bounce.inOut",
      });
    }
  };
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <ArrowCircle
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {shouldAbout}
      <div>
        <svg
          ref={arrowRef}
          className="arrowRotate"
          width="30"
          height="60"
          viewBox="0 0 30 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.0142 51.1472V0H13.879V51.1472L1.49466 40.2056L0 41.3992L14.9466 60L30 41.3992L28.6121 40.2056L16.0142 51.1472Z"
            fill="black"
          />
        </svg>
      </div>
    </ArrowCircle>
  );
};

export default ArrowCirclePointer;
