import React from "react";
import styled from "styled-components";

const Text = styled.p`
font-family:${(props) => (props.font && props.font)};
font-size:${(props) => (props.size && props.size)};
color:${(props) => (props.color && props.color)};
z-index: 10;
`

export default Text;
