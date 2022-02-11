import React from "react";
import Image from "next/image";
import { Images } from "../../public/images/images";

import styled from "styled-components";

const Title = styled.h2`
  font-family: "Sacramento";
  color: #000;
  font-size: 60px;
  text-align: center;
  text-shadow: 5px 5px 5px #99c9e5;
`;

const Text = styled.p`
  font-family: "Josefin Sans";
  color: #000;
  font-size: 30px;
  text-align: center;
  text-shadow: 5px 5px 5px #99c9e5;
`;

const IntroContainer = styled.div`
  position: relative;
  width: 100vw;
`;

const TextContainer = styled.div`
  position: absolute;
  width: 100%;
  top: 30%;
`;

function Introduction() {
  return (
    <>
      <IntroContainer>
        <Image layout="responsive" src={Images.homeScreen} />
        <TextContainer>
          <Title>Emilly</Title>
          <Text>Estudante e aspirante a desenvolvedora</Text>
        </TextContainer>
      </IntroContainer>
    </>
  );
}

export default Introduction;
