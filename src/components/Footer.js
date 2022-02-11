import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { IconContext } from 'react-icons';
import Image from 'next/image';
import { Images } from '../../public/images/images';

import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';

const FooterContent = styled.div`
  
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  h3{
    font-size: 1rem;
    font-weight: 400;
    text-transform: capitalize;
    line-height: 1rem;
  }
  p{
    max-width: 500px;
    margin: 10px auto;
    line-height: 28px;
    font-size: 14px;
  }
`;

const Icons = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0 1rem 0;
  li{
    margin: 0 10px;
  }
  a{
    text-decoration: none;
    color: #fff;
    font-size: 2.5rem;
    transition: color .4s ease;
    &:hover{
      color:aqua;
    } 
  }
  
`;

const FooterBottom = styled.div`
  background: #000;
  width: 100vw;
  padding: 5px 0;
  text-align: center;
  p{
    font-size: 14px;
    word-spacing: 2px;
    text-transform: capitalize;
  }
  span{
    text-transform: uppercase;
    opacity: .4;
    font-weight: 200;
}
`;

function Footer() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

return (
  <footer>
      <FooterContent>
      <Icons>
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
      </Icons>
      <h3>Feito com <Link href='https://reactjs.org/'>react</Link> e <Link href='https://nextjs.org/'>next.js</Link> </h3>
      <p> e também suor e lágrimas </p>
      </FooterContent>
      <FooterBottom>
        <p>feito por <span>Emilly</span></p>
      </FooterBottom>
  </footer>
)
}



export default Footer;