import React, { useState } from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';
import { IconContext } from "react-icons";
import Image from 'next/image';
import { Images } from '../../public/images/images';

import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsSun } from 'react-icons/bs';
import { BsMoon } from 'react-icons/bs';

function Footer() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

return (
  <footer>
      <div className={styles.footerContent}>
      <ul className={styles.icons}>
        <IconContext.Provider value={{ className:'icons' }}>
          <li>
            <Link href='https://github.com/emillyteixeira'>
              <a><BsGithub/></a>
            </Link>
          </li>
          <li>
            <Link href='https://www.linkedin.com/in/emilly-teixeira/'>
              <a><BsLinkedin/></a>
              </Link>
          </li>
          <li>
          <div onClick={handleClick}>
           <a><Image src={click ? Images.iconBR : Images.iconUSA}/> </a>
          </div>
          </li>  
       </IconContext.Provider>
      </ul>
      <h3>Feito com <Link href='https://reactjs.org/'>react</Link> e <Link href='https://nextjs.org/'>next.js</Link> </h3>
      <p> e também suor e lágrimas </p>
      </div>
      <div className={styles.footerBottom}>
        <p>feito por <span>Emilly</span></p>
      </div>
  </footer>
)
}



export default Footer;