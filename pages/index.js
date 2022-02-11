import React, { useState } from "react";
import Head from "next/head";
import Navbar from "../src/components/Navbar.js";
import Introduction from "../src/components/Introduction";
import Footer from "../src/components/Footer.js";
import styled, { ThemeProvider } from "styled-components";
import Slider from "../src/components/Slider.js";

import Accordeon from "../src/components/Accordeon";

const LightTheme = {
  background: "#fff",
};

const DarkTheme = {
  background: "#000",
};

const themes = {
  light: LightTheme,
  dark: DarkTheme,
};

const PageWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background: #d7eaf2;
`;

function HomePage() {
  const [theme, setTheme] = useState("light");
  return (
    <>
      <Head>
        <title>Portfólio Emilly</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Sacramento&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={themes[theme]}>
        <Navbar setTheme={setTheme} theme={theme} />
        <Introduction />
        <PageWrapper>
          <Accordeon title="1" paragraph="4" />
          <Accordeon title="2" paragraph="5" />
          <Accordeon title="3" paragraph="6" />
          <Slider />
        </PageWrapper>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default HomePage;
