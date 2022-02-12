import React from "react";
import styled from "styled-components";

import Carousel from "../src/components/Slider";

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


const SliderContainer = styled.div`

  border: 3px solid #73AD21;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

`; 


function Indicações() {
  return (
    <div id="indicacoes">
      
        <Title>Indicações</Title>
        <Text>Testemunhos recebidos de maneira organica e definitivamente sem compensaçao financeira</Text>
        <SliderContainer>
          <Carousel />
        </SliderContainer>  
      
    </div>
  );
}

export default Indicações;