import React from 'react';
import { Button } from './Button';
import styles from './Footer.module.css';

function Footer() {
return (
  <div className={styles.footerContainer}>
    <section className='footer-subscription'>
      <p className='footer-subscription-heading'>
        sub aqui man pode vim pode pa legal demais man vem de sub!
      </p>
      <p className='footer-subscription-text'>
        pod dis-sub também!
      </p>
      <div className='imput-areas'>
        <form>
          <imput type='email' name='email' placeholder='Your email' className='footer-imput'/>
          <Button buttonStyle='btn--outline' buttonSize='btn--large'> sub </Button>
        </form>
      </div>
    </section>
  </div>
)
}

export default Footer;