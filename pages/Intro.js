import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { Images } from "../public/images/images";

const IntroWrapper = styled.div`
  position: relative;
  height: 100vh;
`;

const ImageWrapper = styled.div`
  position: absolute;
  top: ${(props) => `${props.top}px`};
  bottom: ${(props) => `${props.bottom}px`};
  right: ${(props) => `${props.right}px`};
  left: ${(props) => `${props.left}px`};
  @media screen and (max-width: 960px) {
    display: none;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
`;

const Intro = () => {
  return (
    <IntroWrapper>
      <ImageWrapper top={-200} left={-200}>
        <ImageContainer width="600px" height="600px">
          <Image src={Images.joker} layout="fill" objectFit="cover" objectPosition="50% 50%" />
        </ImageContainer>
      </ImageWrapper>
      <ImageWrapper top={-180} right={-180}>
        <ImageContainer width="800px" height="140vh">
          <Image src={Images.gameboy} layout="fill" objectFit="cover" objectPosition="50% 50%" />
        </ImageContainer>
      </ImageWrapper>
    </IntroWrapper>
  );
};

export default Intro;
