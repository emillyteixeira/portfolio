import React from 'react';
import Head from 'next/head'
import Navbar from '../src/components/Navbar.js';
import HeroSection from '../src/components/HeroSection.js';
import Footer from '../src/components/Footer.js';

function HomePage() {
  return (
      <>
      <Head>
        <title>Portfólio Emilly</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <HeroSection/>
      <Footer />
      </>
      
  );
}

export default HomePage;
