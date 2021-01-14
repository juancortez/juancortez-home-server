import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Noto Sans', sans-serif;
    font-display: swap;
    color: #111;
    margin: 0px;
  }
`;

const StyledMain = styled.main`
  // padding-left: 3vw;
  // padding-right: 3vw;
`;

const StyledHeader = styled.header`
  background: #164a41;
  height: 75px;
`;

const StyledFooter = styled.footer`
  background: #164a41;
  height: 75px;
`;

const StyledText = styled.a`
  font-size: 20px;
  color: #ffffff;
  padding: 0px 16px;
  margin-right: 16px;

  &:hover {
    color: #f1b24a;
    cursor: pointer;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
`;

const StyledFooterSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  height: 100%;

  article,
  aside {
    padding: 8px 8px;
    height: 100%;
  }
`;

const StyledQuoteContainer = styled.article`
  flex: 3;

  display: flex;
  justify-content: start;
  align-items: center;
`;

const StyledIconContainer = styled.aside`
  flex: 1;
  background: #9dc88d;
  font-size: 16px;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: white;

  &:hover {
    cursor: pointer;
  }

  a:visited,
  a:hover,
  a:active {
    color: white;
  }

  img {
    width: 32px;
    height: 32px;
    margin: 0px 16px;
  }
`;

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <GlobalStyle />
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"></link>
    </Head>
    <StyledHeader>
      <StyledNav>
        <Link href="/">
          <StyledText>Work</StyledText>
        </Link>{' '}
        <Link href="/about">
          <StyledText>About</StyledText>
        </Link>
        <Link href="/assets/Cortez_Resume.pdf">
          <StyledText>Resume</StyledText>
        </Link>
      </StyledNav>
    </StyledHeader>
    <StyledMain>{children}</StyledMain>
    <StyledFooter>
      <StyledFooterSection>
        <StyledQuoteContainer>
          <p>Trust your work to the Lord, and your plans will work out well. - Proverbs 16:3</p>
        </StyledQuoteContainer>
        <StyledIconContainer>
          <a href="https://www.linkedin.com/in/juancortezjr" target="_blank">
            <img src="/assets/LinkedIn.svg" />
          </a>
          <a href="https://github.com/juancortez" target="_blank">
            <img src="/assets/GitHub.svg" />
          </a>
        </StyledIconContainer>
      </StyledFooterSection>
    </StyledFooter>
  </div>
);

export default Layout;
