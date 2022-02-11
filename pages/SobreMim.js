import React from "react";
import styled from "styled-components";

import Accordeon from "../src/components/Accordeon";

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

const TextContainer = styled.div`
  float: left;
  width: 300px;
  border: 3px solid #73AD21;
  padding: 10px;
`;

const AccordeonContainer = styled.div`
  float: right;
  width: 300px;
  border: 3px solid #73AD21;
  padding: 10px;

`; 


function SobreMim() {
  return (
    <>
      <PageContainer>
      <Title>Sobre mim</Title>
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
    </>
  );
}

export default SobreMim;