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

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  img {
    max-width: calc(20rem + 20vw);
    object-fit: fill;
    cursor: pointer;
    filter: sepia(${({ theme }) => theme.colors.filterForce}); 
    transition: filter 0.3s ease; 
  }
`;

interface ImageCarouselProps {
  images: string[];
  urls: string[];
}

const CarouselComp: React.FC<ImageCarouselProps> = ({ images, urls }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const totalBoxes = images.length * 2;

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const boxes = wrapper?.children;
    const totalWidth = wrapper?.offsetWidth || 0;

    if (boxes) {
      gsap.to(boxes, {
        xPercent: -100 * images.length,
        ease: "none",
        duration: images.length * 5,
        repeat: -1,
        modifiers: {
          xPercent: gsap.utils.unitize((xPercent) => {
            return parseFloat(xPercent) % (100 * images.length);
          }),
        },
      });

      Array.from(boxes).forEach((box) => {
        const randomRotation =
          Math.random() * 10 * (Math.random() < 0.5 ? -1 : 1);
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
      {images.concat(images).map((image, index) => (
        <Box key={index}>
          <a href={urls[index % images.length]} target="_blank" rel="noopener noreferrer">
            <img src={image} alt="" />
          </a>
        </Box>
      ))}
    </Wrapper>
  );
};

export default CarouselComp;
