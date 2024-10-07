import React from "react";
import styled from "styled-components";

interface WrapperProps {
  children?: React.ReactNode;
}

const WrapperContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};

  h1 {
    font-size: 6rem;
  }
  h2 {
    font-size: 3rem;
    span {
      font-size: 3.6rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.screen.tablet}) {
    h1 {
      font-size: 5.2rem;
    }
    h2 {
      font-size: 2.6rem;
      span {
        font-size: 3.12rem;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.screen.mobile}) {
    h1 {
      font-size: 3.52rem;
    }
    h2 {
      font-size: 1.76rem;
      span {
        font-size: 2.112rem;
      }
    }
  }
`;

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return <WrapperContainer>{children}</WrapperContainer>;
};

export default Wrapper;
