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

function Projetos() {
  return (
    <div id="projetos">
      <PageContainer>
      <ImgComponent z-index={1} top={150} right={100} width="250px" height="220px" source={Images.celM}/>
      <ImgComponent z-index={0} top={600} left={220} width="13vw" height="18vh" source={Images.celP}/>
      <ImgComponent z-index={1} bottom={-250} right={-180} width="700px" height="700px" source={Images.passaro}/>
        <Text font="Paytone One" size="60px" color="#000" as="h3"> Projetos </Text>
        <TextContainer>
          <Text font="Raleway" size="20px" color="#000">Em breve...</Text>
        </TextContainer>
      </PageContainer>
    </div>
  );
}

export default Projetos;