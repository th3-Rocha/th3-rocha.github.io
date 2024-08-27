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
  
`;

const ArrowAspas = () => {
  const arrowRef = useRef<SVGSVGElement | null>(null);
  return (
    <ArrowCircle>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 300 300"
          fill="none"
        >
          <path d="M103.23 145.98c-24.42-11.67-29.98-44.15-10.47-62.91 4.5-4.97 15.66-9.15 10.79-17.58-2.29-3.84-7.25-5.03-11.05-2.67-40.13 28.21-76.9 64.95-68.47 129.87 7.69 59.24 105.24 63.52 107.08-2.53 0-19.63-11.51-36.35-27.88-44.18zm146.08 0c-24.42-11.67-29.98-44.15-10.47-62.91 4.5-4.97 15.66-9.15 10.79-17.58-2.29-3.84-7.25-5.03-11.05-2.67-40.13 28.21-76.9 64.95-68.47 129.87 7.69 59.24 105.24 63.52 107.08-2.53 0-19.63-11.51-36.35-27.88-44.18z"></path>
        </svg>
      </div>
    </ArrowCircle>
  );
};

export default ArrowAspas;
