import React from "react";
import styled, { keyframes } from "styled-components";
import SpanText from "./SpanText"; // Assuming SpanText is in the same directory

// Keyframes for seamless scrolling
const scrollText = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%); /* Move by half the length to create the loop */
  }
`;

const CarouselTextContainer = styled.div`
  overflow: hidden;
  white-space: nowrap;
  display: flex;
  align-items: center;
  width: 100%; /* Ensure the container takes up the full width */
  height: 100%; /* Adjust the height to suit your design */
  position: relative;
`;

const ScrollingText = styled.div`
  display: inline-block;
  animation: ${scrollText} 20s linear infinite; /* Control the speed of the scroll */
  white-space: nowrap;
  font-size: 6rem;
`;

const WordWrapper = styled.span`
  display: inline-block;
  margin-right: 2rem; /* Space between words */
`;

const CarouselText = () => {
  const words = [" - First", " - Second", " - Third", " - Fourth", " - Fifth"];

  return (
    <CarouselTextContainer>
      <ScrollingText>
        {/* Duplicate words to create the seamless effect */}
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
