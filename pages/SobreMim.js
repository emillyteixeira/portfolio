import React from "react";
import styled from "styled-components";
import { Images } from "../public/images/images";
import ImgComponent from "../src/components/ImgComponent";
import Text from "../src/components/Text";
import Accordeon from "../src/components/Accordeon";
const PageWrapper = styled.div`
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
  width: 50%;
  background-color: #fff;
  border: 1px solid #99c9e5;
  padding: 10px;
  border-radius: 20px;
  align-items: left;
  z-index: 5;
`;

function SobreMim() {
  return (
    <div id="sobre-mim">
      <PageWrapper>
      <ImgComponent z-index={1} top={-140} left={500} right={50} width="400px" height="400px" source={Images.celG}/>
      <ImgComponent z-index={0} top={-100} right={-200} width="600px" height="600px" source={Images.koala}/>
      <ImgComponent z-index={1} bottom={-400} left={-180} width="700px" height="700px" source={Images.ovio}/>
        <Text font="Paytone One" size="60px" color="#000" as="h3"> Sobre mim </Text>
        <TextContainer>
          <Text font="Raleway" size="20px" color="#000"> Oi, eu sou a Emilly e tenho muitos interesses que nem sempre fazem sentido juntos (mas às vezes sim!). Eu sempre gostei de criar e o que que falta em habilidades práticas nas artes (nada de desenho ou talento musical por aqui :')  eu busco compensar em criatividade… </Text>
          <Text font="Raleway" size="20px" color="#000"> E de tanto buscar onde focar esse lado criativo com minha tendência a 'matematizar' tudo e necessidade de racionalizar todo pensamento intrusivo em minha mente voltei meus esforços para o desenvolvimento web.</Text>
          <Text font="Raleway" size="20px" color="#000"> Hoje busco uma oportunidade de recolocação no mercado tecnológico como 'profissional' de front-end e poder crescer como desenvolvedora.</Text>
          <Text font="Raleway" size="20px" color="#000"> No momento tenho focado em ReactJS, NodeJS e NextJS e explorado um pouco do React Native em aplicações mobile. </Text>
        </TextContainer>
        <TextContainer>
         <Accordeon/>
        </TextContainer>
      </PageWrapper>
    </div>
  );
}

export default SobreMim;
