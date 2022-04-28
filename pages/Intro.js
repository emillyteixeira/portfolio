import React from "react";
import styled from "styled-components";
import { Images } from "../public/images/images";
import ImgComponent from "../src/components/ImgComponent";
import Text from "../src/components/Text";
import MyName from "../src/components/MyName";

const IntroWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100vh;
`;

const TextContainer = styled.div`
  position: relative;
  z-index: 5;
`;

const Intro = () => {
  return (
    <IntroWrapper>
       <ImgComponent zIndex={1} top={-200} left={-200} width="600px" height="600px" source={Images.joker}/>
       <ImgComponent zIndex={1} top={-180} right={-260} width="800px" height="160vh" source={Images.gameboy}/>
      <TextContainer>
        <Text font="Paytone One" size="80px" color="#000" as="h1">
          Olá, meu nome é Emilly!
        </Text>
        <Text font="Paytone One" size="40px" color="#000" as="h2">Sou estudante (quase o dia todo…)</Text>
        <Text font="Raleway" size="30px" color="#000">
          Eu sou graduanda de Letras na UFMG, cursando estudos literários e explorando o mágico
          mundo da tecnologia!
        </Text>
        <MyName/>
      </TextContainer>
    </IntroWrapper>
  );
};

export default Intro;
