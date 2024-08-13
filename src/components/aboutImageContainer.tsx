import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import "locomotive-scroll/dist/locomotive-scroll.css";

const Container = styled.div`
  width: 100%;
  max-height: 33rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  margin-top: 5rem;
  margin-bottom: 10rem;
`;

const ImageBackground = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
`;

const ImageOverlayBackground = styled.img`
  min-width: 100%;
  height: auto;
  z-index: 2;
  position: relative;
  transform: translateY(0);
  will-change: transform;
`;

interface ImageAboutProps {
  imageUrlBackground: string;
  imageUrlOverlay: string;
}

const ImageAbout: React.FC<ImageAboutProps> = ({
  imageUrlBackground,
  imageUrlOverlay,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  }, []);

  return (
      <Container >
        <ImageBackground src={imageUrlBackground} alt="Background Image"
          data-scroll
          data-scroll-speed="-0.5"  />
        <ImageOverlayBackground
          src={imageUrlOverlay}
          alt="Overlay Image"
          data-scroll
          data-scroll-speed="1" 
        />
      </Container>
  );
};

export default ImageAbout;
