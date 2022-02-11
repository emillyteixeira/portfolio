import React from "react";
import styled from "styled-components";

import Slider from "../src/components/Slider";

const Title = styled.h2`
  font-family: "Sacramento";
  color: #000;
  font-size: 60px;
  text-align: left;
`;

const Text = styled.p`
  font-family: "Josefin Sans";
  color: #000;
  font-size: 30px;
  text-align: left;
`;

const PageContainer = styled.div`
  position: relative;
  width: 100vw;
`;

const SliderContainer = styled.div`

  border: 3px solid #73AD21;
  padding: 10px;

`; 


function Indicações() {
  return (
    <>
      <PageContainer>
        <Title>Indicações</Title>
        <Text>Testemunhos recebidos de maneira organica e definitivamente sem compensaçao financeira</Text>
        <SliderContainer>
          <Slider />
        </SliderContainer>  
      </PageContainer>
    </>
  );
}

export default Indicações;