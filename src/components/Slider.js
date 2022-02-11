import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import styled from "styled-components";

const Text = styled.p`
  font-family: "Josefin Sans";
  color: #293892;
  font-size: 20px;
`;

const items = [
  <Text> eu </Text>,
  <Text> cansei </Text>,
  <Text>
    {" "}
    Fizzle shiz dolor sizzle amizzle, boom shackalack adipiscing elizzle. Nullam dizzle velizzle,
    aliquet volutpizzle, suscipizzle shizzle my nizzle crocodizzle, sure vizzle, arcu. Pellentesque
    fo shizzle my nizzle tortor. Sed erizzle. Fizzle bizzle get down get down dapibus bizzle
    tempizzle check it out. Maurizzle doggy nibh izzle turpizzle. We gonna chung izzle tortizzle.
    Pellentesque dang rhoncus bow wow wow. In yippiyo habitasse dictumst. You son of a bizzle
    dapibus. Break yo neck, yall gangster mammasay mammasa mamma oo sa, pretizzle bling bling,
    mattizzle ac, eleifend vitae, nunc. Pimpin' suscipizzle. Fo shizzle sempizzle velit sizzle check
    it out.{" "}
  </Text>,
];

function Slider() {
  return <AliceCarousel autoWidth infinite mouseTracking items={items} />;
}

export default Slider;
