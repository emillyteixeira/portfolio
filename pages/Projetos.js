import React from "react";
import styled from "styled-components";


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
  width: 100vw;
  display: inline-grid;
`;




function Projetos() {
  return (
    <div id="projetos">
      <PageContainer>
        <Title>Projetos</Title>
        <Text>Estudante na sofrencia</Text>
      </PageContainer>
    </div>
  );
}

export default Projetos;