import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import OphanimMeme from "./OphanimMeme";






















const ExtContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  color: ${({ theme }) => theme.colors.background};
  font-family: ${({ theme }) => theme.fonts.main};
  pointer-events: none;
  @media (max-width: 1100px) {
    grid-template-columns: 0fr 4fr;
    margin-left: 2rem;
  }
`;

const ExtContainer2 = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  pointer-events: none;
`;

const BottomLine = styled.div`
  height: 0px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.footerLineHard};
  margin-left: 3rem;
  margin-right: 3rem;
  width: calc(100% - 5rem);

  @media (max-width: 1100px) {
    margin-left: 2rem;
  }
  @media (max-width: 600px) {
    width: calc(100% - 4rem);
  }
`;

const ArtContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  border-left: 1px solid ${({ theme }) => theme.colors.footerLine};
`;

const TextContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const FooterLeft = styled.div`
  margin-bottom: 0;
  pointer-events: none;
`;

interface FooterProps {
  WantText: string;
  ContactText: string;
  onContactClick: () => void;
}

const ContactPreFooter: React.FC<FooterProps> = ({
  WantText,
  ContactText,
  onContactClick,
}) => {
  const apiRef = useRef<any>(null);

  useEffect(() => {
  }, []);

  return (
    <ExtContainer2>
      <ExtContainer>
        <FooterLeft></FooterLeft>
        <ArtContainer>
          <OphanimMeme />
          <TextContainer>{/* Removed H1TextSpan */}</TextContainer>
        </ArtContainer>
      </ExtContainer>
      <BottomLine />
    </ExtContainer2>
  );
};

export default ContactPreFooter;
