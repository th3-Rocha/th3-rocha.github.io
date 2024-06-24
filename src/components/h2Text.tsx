import React from "react";
import styled from "styled-components";

const H2Text = styled.div`
  h2 {
    font-family: "Inter", sans-serif;
    font-optical-sizing: auto;
    letter-spacing: -2px;
    font-weight: 300;
    font-style: normal;
    font-variation-settings: "slnt" 0;
    margin-top: 1rem;
    line-height: 0.9;
    word-break: keep-all; 
    span {
      font-family: "Cormorant Garamond", serif;
      font-weight: 500;
      font-style: normal;
    }
  }
`;


const H2TextSpan = ({
  Text,
  TextHighlight,
  classNameTag,
}: {
  Text: string;
  TextHighlight: string;
  classNameTag: string;
}) => {
  return (
    <H2Text className={classNameTag}>
      <h2>
        {Text}
        <span>{TextHighlight}</span>
      </h2>
    </H2Text>
  );
};

export default H2TextSpan;
