import React from "react";
import styled from "styled-components";

const H1Text = styled.div`
  h1 {
    margin: 0;
    margin-left: 3px;
    font-style: italic;
    position: relative;
    overflow: hidden;
    width: 100;
    margin-top: 7.4rem;
    font-weight: 400;
    font-family: "shzapfrenaisantlight-ita";
    overflow: hidden;
    margin-bottom: 0px;
  }
`;

interface Translations {
  home: {
    name: string;
    nameDescription: string;
    nameDescriptionHighlight: string;
  };
}

const H1TextSpan = ({
  Text,
  classNameTag,
}: {
  Text: string;
  classNameTag: string;
}) => {
  return (
    <H1Text className={classNameTag}>
      <h1>{Text}</h1>
    </H1Text>
  );
};

export default H1TextSpan;
