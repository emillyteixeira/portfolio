/* import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import styles from './Slider.module.css';
import styled from 'styled-components';

const Text = styled.p`
 color: #293892;
 font-size: 40px;
`;

const Wrapper = styled.div`
.awssld {
--slider-height-percentage: 25%;
--slider-transition-duration: 200ms;
--organic-arrow-thickness: 4px;
--organic-arrow-border-radius: 0px;
--organic-arrow-height: 40px;
--organic-arrow-color: #538bd5;
--control-button-width: 10%;
--control-button-height: 25%;
--control-button-background: transparent;
--loader-bar-color: #851515;
--loader-bar-height: 10px;
}
`
function Slider() {

  return (
    <Wrapper>

      <AwesomeSlider>
            <div> <Text> eu </Text> </div>
            <div> <Text> acho </Text> </div>
            <div> <Text> que </Text> </div>
            <div> <Text> foi </Text> </div>
      </AwesomeSlider>
    </Wrapper>
  )
};

export default Slider; */

import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import styled from "styled-components";

const Text = styled.p`
  color: #293892;
  font-size: 40px;
`;

const itemsLength = Array.from({ length: 5 });
// const handleDragStart = (e) => e.preventDefault();

// const items = [
//   <p onDragStart={handleDragStart} role="presentation"> eu </p>,
//   <p onDragStart={handleDragStart} role="presentation"> cansei </p>,
//   <p onDragStart={handleDragStart} role="presentation"> Fizzle shiz dolor sizzle amizzle, boom shackalack adipiscing elizzle. Nullam dizzle velizzle, aliquet volutpizzle, suscipizzle shizzle my nizzle crocodizzle, sure vizzle, arcu. Pellentesque fo shizzle my nizzle tortor. Sed erizzle. Fizzle bizzle get down get down dapibus bizzle tempizzle check it out. Maurizzle doggy nibh izzle turpizzle. We gonna chung izzle tortizzle. Pellentesque dang rhoncus bow wow wow. In yippiyo habitasse dictumst. You son of a bizzle dapibus. Break yo neck, yall gangster mammasay mammasa mamma oo sa, pretizzle bling bling, mattizzle ac, eleifend vitae, nunc. Pimpin' suscipizzle. Fo shizzle sempizzle velit sizzle check it out. </p>,
// ];

// function Slider () {
//   return (
//     <AliceCarousel mouseTracking items={items} />
//   );
// };
const items = itemsLength.map((item, index) => {
  const style = { width: 150 + index * 100 };
  return (
    <div className="item" style={style}>
      {index + 1}
    </div>
  );
});
const Items = [
  <p> eu </p>,
  <p> cansei </p>,
  <p>
    {" "}
    Fizzle shiz dolor sizzle amizzle, boom shackalack adipiscing elizzle. Nullam dizzle velizzle,
    aliquet volutpizzle, suscipizzle shizzle my nizzle crocodizzle, sure vizzle, arcu. Pellentesque
    fo shizzle my nizzle tortor. Sed erizzle. Fizzle bizzle get down get down dapibus bizzle
    tempizzle check it out. Maurizzle doggy nibh izzle turpizzle. We gonna chung izzle tortizzle.
    Pellentesque dang rhoncus bow wow wow. In yippiyo habitasse dictumst. You son of a bizzle
    dapibus. Break yo neck, yall gangster mammasay mammasa mamma oo sa, pretizzle bling bling,
    mattizzle ac, eleifend vitae, nunc. Pimpin' suscipizzle. Fo shizzle sempizzle velit sizzle check
    it out.{" "}
  </p>,
];

function Slider() {
  return <AliceCarousel autoWidth infinite mouseTracking items={Items} />;
}

export default Slider;
