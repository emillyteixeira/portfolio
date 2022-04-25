import React, { useState } from "react";
import Head from "next/head";
import Navbar from "../src/components/Navbar.js";
import Footer from "../src/components/Footer.js";
import styled, { ThemeProvider } from "styled-components";

import SobreMim from "./SobreMim.js";
import Projetos from "./Projetos.js";
import Indicações from "./Indicações.js";
import Intro from "./Intro.js";

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
          href="https://fonts.googleapis.com/css2?family=Paytone+One&family=Raleway:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={themes[theme]}>
        <Navbar setTheme={setTheme} theme={theme} />
        <Intro />
        <SobreMim />
        <Projetos />
        <Indicações />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default HomePage;
