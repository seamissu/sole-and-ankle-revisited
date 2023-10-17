/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

import { WEIGHTS } from '../../constants';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <div>
      <Overlay isOpen={isOpen} onDismiss={onDismiss}>
        <Content aria-label="menu">
          <DismissButton onClick={onDismiss}>
            <VisuallyHidden>Dismiss menu</VisuallyHidden>
            <Icon id="close" strokeWidth={2} />
          </DismissButton>
          <Buffer></Buffer>
          <Nav>
            <Link href="/sale">Sale</Link>
            <Link href="/new">New&nbsp;Releases</Link>
            <Link href="/men">Men</Link>
            <Link href="/women">Women</Link>
            <Link href="/kids">Kids</Link>
            <Link href="/collections">Collections</Link>
          </Nav>
          <Footer>
            <BottomLink href="/terms">
              Terms and Conditions
            </BottomLink>
            <BottomLink href="/privacy">Privacy Policy</BottomLink>
            <BottomLink href="/contact">Contact Us</BottomLink>
          </Footer>
        </Content>
      </Overlay>
    </div>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  inset: 0;
  height: 100%;
  width: 100%;
  background-color: var(--color-backdrop);
`;

const Content = styled(DialogContent)`
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 32px;
  background-color: var(--color-white);
`;

const DismissButton = styled(UnstyledButton)`
  position: absolute;
  top: 16px;
  right: 10px;
  padding: 16px;
`;

const Link = styled.a`
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  font-size: 18px;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const BottomLink = styled.a`
  text-decoration: none;
  color: var(--color-gray-700);
  font-weight: ${WEIGHTS.normal};
  font-size: 14px;
`;

const Buffer = styled.div`
  flex: 1;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-transform: uppercase;
`;

const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 14px;
`;

export default MobileMenu;
