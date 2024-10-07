import React from 'react';
import styled from 'styled-components';

interface SidebarProps {
  children?: React.ReactNode;
  classNameTag?: string;
}

const SidebarContainer = styled.div`
  border-right: 1px solid ${({ theme }) => theme.colors.secondary};
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 32px 14fr;

  @media (max-width: ${({ theme }) => theme.screen.tablet}) {
    min-width: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.screen.mobile}) {
    border-right: 0;
    margin-left: 0;
  }
`;

const Sidebar: React.FC<SidebarProps> = ({ children, classNameTag }) => {
  return (
    <SidebarContainer className={classNameTag}>
      {children}
    </SidebarContainer>
  );
};

export default Sidebar;
