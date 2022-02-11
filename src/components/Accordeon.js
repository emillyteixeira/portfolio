import React, { useState } from "react";

function Accordeon(props) {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <div>
      <div onClick={handleClick}>
        <h3>{props.title}</h3>
      </div>
      {show && (
        <div>
          <p>{props.paragraph}</p>
        </div>
      )}
    </div>
  );
}

export default Accordeon;
