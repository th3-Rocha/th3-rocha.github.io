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
  Text2,
  TextHighlight,
  TextHighlight2,
  classNameTag,
  fontStyle,
}: {
  Text?: string;
  Text2?: string;
  TextHighlight?: string;
  TextHighlight2?: string;
  classNameTag?: string;
  fontStyle?: string;
}) => {
  return (
    <H2Text className={classNameTag}>
      <h2>
        {Text}
        <span style={{ fontStyle: fontStyle }}>{TextHighlight}</span>
        {Text2}
        <span style={{ fontStyle: fontStyle }}>{TextHighlight2}</span>
      </h2>
    </H2Text>
  );
};

export default H2TextSpan;
