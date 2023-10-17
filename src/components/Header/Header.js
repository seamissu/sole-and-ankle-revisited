import React from 'react';
import styled from 'styled-components/macro';

import { WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import { QUERIES } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <SideLeft>
          <Logo />
        </SideLeft>
        <ButtonList>
          <UnstyledButton>
            <Icon id="shopping-bag" strokeWidth={2} />
          </UnstyledButton>
          <UnstyledButton>
            <Icon id="search" strokeWidth={2} />
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" strokeWidth={2} />
          </UnstyledButton>
        </ButtonList>
        <Nav>
          <NavLink href="/sale">À vendre</NavLink>
          <NavLink href="/new">Nouvelles versions</NavLink>
          <NavLink href="/men">Hommes</NavLink>
          <NavLink href="/women">Femmes</NavLink>
          <NavLink href="/kids">les enfants</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <SideRight />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);

  @media ${QUERIES.tabletAndDown} {
    justify-content: space-between;
    align-items: center;
  }

  @media ${QUERIES.mobileAndDown} {
    justify-content: space-between;
    align-items: center;
    padding: 18px 16px;
  }
`;

const ButtonList = styled.div`
  display: none;

  @media ${QUERIES.tabletAndDown} {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    gap: 32px;
  }

  @media ${QUERIES.mobileAndDown} {
    gap: 16px;
  }
`;

const Nav = styled.nav`
  display: flex;
  margin: 0px 48px;
  overflow: scroll;
  white-space: nowrap;
  gap: clamp(1.1rem, 10.3vw - 5rem, 3.6rem);

  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const SideLeft = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndDown} {
    flex-grow: 0;
  }
`;

const SideRight = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndDown} {
    flex-grow: 0;
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

export default Header;
