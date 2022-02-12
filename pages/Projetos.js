import React from "react";
import styled from "styled-components";

import Card from "../src/components/Card";

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

const CardContainer = styled.div`
  float: right;
  width: 300px;
  border: 3px solid #73AD21;
  padding: 10px;
  display: flex;

`; 


function Projetos() {
  return (
    <div id="projetos">
      <PageContainer>
        <Title>Projetos</Title>
        <Text>Estudante na sofrencia</Text>
        <CardContainer>
          <Card />
          <Card />
        </CardContainer>  
      </PageContainer>
    </div>
  );
}

export default Projetos;