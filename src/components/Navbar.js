import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Images } from '../../public/images/images';
import Image from 'next/image';
import styles from './Navbar.module.css';
import { Button } from './Button';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  useEffect(() => {
    window.addEventListener("resize", showButton);
  }, []);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbarContainer}>
          <div className={styles.menuIcon} onClick={handleClick}>
            <Image src={click ? Images.xIcon : Images.menuIcon} />
          </div>
          <ul className={click ? styles.navMenu_Active : styles.navMenu}>
            <li className={styles.navItem}>
              <Link href="/" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/sla"  onClick={closeMobileMenu}>
                sl4
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/sla"  onClick={closeMobileMenu}>
                h3lp
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'> H3!P </Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
