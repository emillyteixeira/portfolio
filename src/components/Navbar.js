import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styled, { css } from "styled-components";
import { Images } from "../../public/images/images";
import { IconContext } from "react-icons";

import { BsSun } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";

const Toggle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 35px;
  width: 35px;
  border-radius: 50%;
  border: none;
  color: ${(props) => props.theme.background};
  & focus {
    outline: none;
  }
  transition: all 0.5 ease;
`;

const NavWrapper = styled.nav`
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  height: 50px;
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  position: sticky;
  top: 0;
  z-index: 999;
  box-shadow: 0px 3px 3px 0px #d5d5d5;
  padding: 0px 10px;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  max-width: 1500px;
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  @media screen and (max-width: 960px) {
    ${(props) =>
      props.isClicked
        ? css`
            background: #99C9E5;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 50px;
            width: 100vw;
            height: 100vh;
            position: absolute;
            top: 50px;
            left: 0;
            opacity: 1;
            transition: all 0.5s ease;
            opacity: 1;
            transition: all 0.5s ease;
            z-index: 1;
          `
        : css`
            display: flex;
            align-items: center;
            flex-direction: column;
            width: 100vw;
            height: 100vh;
            position: absolute;
            top: 50px;
            left: -100%;
            opacity: 1;
            transition: all 0.5s ease;
          `}
  }
`;

const NavItem = styled.li`
  a {
    color: #345922;
    display: flex;
    font-size: 20px;
    align-items: center;
    text-decoration: none;
    padding: 0px 10px;
    height: 100%;
    &:hover {
      border-bottom: 4px solid #fff;
      transition: all 0.3s ease-out;
    }
  }

  @media screen and (max-width: 960px) {
    position: relative;
    a {
      color: #fff;
      font-size: 30px;
      letter-spacing: 2px;
    }
  }
`;

const MenuIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1rem;
    cursor: pointer;
  }
`;

function Navbar(props) {
  function changeTheme() {
    if (props.theme === "light") {
      props.setTheme("dark");
    } else {
      props.setTheme("light");
    }
  }
  const icon = props.theme === "light" ? <BsMoon size={25} /> : <BsSun size={25} />;

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <NavWrapper>
        <NavContainer>
          <Toggle onClick={changeTheme}>{icon}</Toggle>
          <MenuIcon onClick={handleClick}>
            <Image src={click ? Images.xIcon : Images.menuIcon} />
          </MenuIcon>
          <NavMenu isClicked={click}>
            <NavItem>
              <Link href="#sobre-mim" onClick={closeMobileMenu}>
                Sobre mim
              </Link>
            </NavItem>
            <NavItem>
              <Link href="#projetos" onClick={closeMobileMenu}>
                Projetos
              </Link>
            </NavItem>
            <NavItem>
              <Link href="#indicacoes" onClick={closeMobileMenu}>
                Indicações
              </Link>
            </NavItem>
          </NavMenu>
        </NavContainer>
      </NavWrapper>
    </>
  );
}

export default Navbar;

// {button && <Button buttonStyle='btn--outline'> H3!P </Button>}
