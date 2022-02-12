import React from "react";
import styled from "styled-components";

import Accordeon from "../src/components/Accordeon";

const Title = styled.h2`
  font-family: "Sacramento";
  color: #000;
  font-size: 60px;
  text-align: left;
  margin: unset;
  padding: 60px 19px 10px 19px;
`;

const Text = styled.p`
  font-family: "Josefin Sans";
  color: #000;
  font-size: 30px;
  text-align: left;
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  padding: 10px 19px;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  background-color: #fff;
  border: 1px solid #99c9e5;
  padding: 10px;
  border-radius: 20px;
`;

const AccordeonContainer = styled.div`
  width: 100%;
  background-color: #fff;
  border: 1px solid #99c9e5;
  padding: 10px;
  margin-left: 50px;
  border-radius: 20px;
  @media screen and (max-width: 960px) {
    margin-left: 0px;
    margin-top: 50px;
  }
`;

function SobreMim() {
  return (
    <div id="sobre-mim">
      <Title>Sobre mim</Title>
      <PageContainer>
        <TextContainer>
          <Text>Estudante na sofrencia</Text>
          <Text>lagrimas risada e suor</Text>
        </TextContainer>
        <AccordeonContainer>
          <Accordeon title="wejcbjkbwiecbiw" paragraph="bcwieucbiwbecwencwnicenicuwei" />
          <Accordeon title="wejcbjkbwiecbiw" paragraph="bcwieucbiwbecwencwnicenicuwei" />
          <Accordeon title="wejcbjkbwiecbiw" paragraph="bcwieucbiwbecwencwnicenicuwei" />
        </AccordeonContainer>
      </PageContainer>
    </div>
  );
}

export default SobreMim;