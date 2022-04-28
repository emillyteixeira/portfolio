import React from "react";
import styled from "styled-components";
import { Images } from "../public/images/images";
import ImgComponent from "../src/components/ImgComponent";
import Text from "../src/components/Text";

const PageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 10px 19px;
  height: 100vh;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TextContainer = styled.div`
  width: 90%;
  background-color: #fff;
  border: 1px solid #99c9e5;
  padding: 10px;
  border-radius: 20px;
  align-items: left;
  z-index: 10;
`;

function Indicações() {
  return (
    <div id="indicacoes">
      <PageContainer>
      <ImgComponent z-index={1} bottom={-100} left={-180} width="700px" height="700px" source={Images.pombo}/>
      <ImgComponent z-index={0} bottom={-250} right={-280} width="500px" height="500px" source={Images.celG}/>  
        <Text font="Paytone One" size="60px" color="#000" as="h3">
          Indicações
        </Text>
        <TextContainer>
          <Text font="Raleway" size="20px" color="#000">
            Testemunhos recebidos de maneira organica e definitivamente sem compensaçao financeira
          </Text>
        </TextContainer>
      </PageContainer>
    </div>
  );
}

export default Indicações;
