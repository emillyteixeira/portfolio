import React from "react";
import styled from "styled-components";
import Image from "next/image";

const ImageWrapper = styled.div`
position: absolute;
top: ${(props) => `${props.top}px`};
bottom: ${(props) => `${props.bottom}px`};
right: ${(props) => `${props.right}px`};
left: ${(props) => `${props.left}px`};
z-index: ${(props) => `${props.zIndex}`};
@media screen and (max-width: 960px) {
  display: none;
}
`;

const ImageContainer = styled.div`
position: relative;
width: ${(props) => (props.width ? props.width : "auto")};
height: ${(props) => (props.height ? props.height : "auto")};
`;

function ImgComponent( props ){

  return(
    <ImageWrapper zIndex={props.zIndex} top={props.top} bottom={props.bottom} left={props.left} right={props.right}>
      <ImageContainer width={props.width} height={props.height}>
        <Image src={props.source} layout="fill" objectFit="cover" objectPosition="50% 50%"/>
      </ImageContainer>
    </ImageWrapper>
  );
}

export default ImgComponent;
