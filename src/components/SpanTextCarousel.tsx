import React from "react";
import styled, { keyframes } from "styled-components";
import SpanText from "./SpanText";
const scrollText = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%); 
  }
`;

const CarouselTextContainer = styled.div`
  overflow: hidden;
  white-space: nowrap;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
`;

const ScrollingText = styled.div`
  display: inline-block;
  animation: ${scrollText} 20s linear infinite;
  white-space: nowrap;
  font-size: calc(1rem + 6vw);
`;

const WordWrapper = styled.span`
  display: inline-block;
  margin-right: 2rem;
`;

const CarouselText = () => {
  const words = [
    " – NestJS",
    " – Next.js",
    " – React",
    " – Node.js",
    " – Three.js",
    " – Tailwind",
    " – Prisma",
    " – PostgreSQL",
    " – MongoDB",
    " – Docker",
    " – TypeScript",
    " – GraphQL",
    " – Redis",
    " – Auth (JWT / OAuth)",
  ];

  return (
    <CarouselTextContainer>
      <ScrollingText>
        {words.concat(words).map((word, index) => (
          <WordWrapper key={index}>
            <SpanText Text={word} />
          </WordWrapper>
        ))}
      </ScrollingText>
    </CarouselTextContainer>
  );
};

export default CarouselText;
