import React, { useState } from "react";
import Text from "./Text";

function Accordeon() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Text
        font="Raleway"
        size="20px"
        color="#000"
        onClick={() => {
          if (show === true) {
            setShow(false);
          } else {
            setShow(true);
          }
        }}
      >
        titulo
      </Text>
      {show === true ? (
        <Text font="Raleway" size="20px" color="#000">
          texto
        </Text>
      ) : (
        <div />
      )}
    </div>
  );
}

// Se objeto condição consequencia, senão consequencia

export default Accordeon;
/* perguntar davi melhor forma de ternario */
