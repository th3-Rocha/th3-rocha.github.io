import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";

const Wrapper = styled.div`
  height: 20%;
  width: 100%;
  margin-top: 0;
  margin-bottom: 0;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

interface BoxProps {
  totalBoxes: number;
}

const Box = styled.div<BoxProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-width: calc(20rem + 20vw);
    object-fit: fill;
  }
`;

interface ImageCarouselProps {
  images: string[];
}

const CarouselComp: React.FC<ImageCarouselProps> = ({ images }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const boxes = wrapperRef.current?.children;
    if (boxes) {
      gsap.to(boxes, {
        xPercent: -100 * 12,
        ease: "none",
        duration: 12 * 4,
        repeat: -1,
        modifiers: {
          xPercent: gsap.utils.unitize(
            (xPercent) => parseFloat(xPercent) % (100 * boxes.length)
          ),
        },
      });

      // Add tilt animation with unique random delay and direction for each box
      Array.from(boxes).forEach((box) => {
        const randomRotation = Math.random() * 10 * (Math.random() < 0.5 ? -1 : 1);
        gsap.fromTo(
          box,
          { rotation: randomRotation },
          {
            rotation: -randomRotation,
            yoyo: true,
            repeat: -1,
            duration: 5,
            ease: "power1.inOut",
            delay: Math.random() * 2,
          }
        );
      });
    }
  }, [images]); 

  return (
    <Wrapper ref={wrapperRef}>
      {images.map((image, index) => (
        <Box key={index} totalBoxes={images.length}>
          <img src={image} alt="" />
        </Box>
      ))}
      {images.map((image, index) => (
        <Box key={index} totalBoxes={images.length}>
          <img src={image} alt="" />
        </Box>
      ))}
    </Wrapper>
  );
};

export default CarouselComp;