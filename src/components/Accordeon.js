import React, { useState } from "react";

import styled from "styled-components";

const AccordeonContainer = styled.div`
  background-color: #fff;
  

`;

function Accordeon(props) {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <AccordeonContainer>
      <div onClick={handleClick}>
        <h3>{props.title}</h3>
      </div>
      {show && (
        <div>
          <p>{props.paragraph}</p>
        </div>
      )}
    </AccordeonContainer>
  );
}

export default Accordeon;
