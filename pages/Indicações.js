import React from "react";
import styled from "styled-components";

const Title = styled.h2`
  font-family: "Paytone One";
  color: #000;
  font-size: 60px;
  text-align: left;
`;

const Text = styled.p`
  font-family: "Raleway";
  color: #000;
  font-size: 30px;
  text-align: left;
`;

function Indicações() {
  return (
    <div id="indicacoes">
      <Title>Indicações</Title>
      <Text>
        Testemunhos recebidos de maneira organica e definitivamente sem
        compensaçao financeira
      </Text>
    </div>
  );
}

export default Indicações;
