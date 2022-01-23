import React from 'react';
import Image from 'next/image';
import styles from './HeroSection.module.css';
import { Button } from './Button';
import { Images } from '../../public/images/images';

function HeroSection() {
  return (
    // <div className={styles.heroContainer}>
    //   <h1> AHHHHHHHHHH </h1>
    //   <p> ahhhh </p>
    //   <div className='hero-btns'>
    //    <Button buttonStyle='btn--outline' buttonSize='btn--large'> H3!P </Button>
    //   </div>
    // </div>
    <div className={styles.background_image}> 
        <Image
          src={Images.homeScreen}
        />
      </div>
  )
}

export default HeroSection