import React from "react";
import Carousel from "react-material-ui-carousel";

function CadaItemDoCarrosel(props) {
  return (
    <div className="slider-container">
      <span className="slider-text">{props.item.text}</span>
      <span className="slider-ass">{props.item.ass}</span>
    </div>
  );
}

function Slider(props) {
  var items = [
    {
      text: "Random Name #1",
      ass: "Probably the most random thing you have ever seen!",
    },
    {
      text: "Random Name #2",
      ass: "Hello World!",
    },
    {
      text: "Random Name #3",
      ass: "Hello World!",
    },
  ];

  return (
    <Carousel className="carousel" animation="fade" cycleNavigation={true} navButtonsAlwaysVisible={true} 
    fullHeightHover={false}>
      {items.map((item, i) => (
        <CadaItemDoCarrosel key={i} item={item} />
      ))}
    </Carousel>
  );
}

export default Slider;
