import React from "react";
import styled from "styled-components";

const SpanTextDiv = styled.div`
  span {
    font-family: "Cormorant Garamond", serif;
    font-weight: 500;
    font-style: normal;
  }
`;

const SpanText = ({
  Text,
  classNameTag,
  fontStyle,
}: {
  Text?: string;
  classNameTag?: string;
  fontStyle?: string;
}) => {
  return (
    <SpanTextDiv className={classNameTag}>
      <span style={{ fontStyle: fontStyle }}>{Text}</span>
    </SpanTextDiv>
  );
};

export default SpanText;
