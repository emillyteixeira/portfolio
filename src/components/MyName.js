import React, {useState} from "react";
import Text from "./Text";

function MyName() {
  const [name, setName] = useState("pituko");
  return (
    <Text
      onClick={() => { 
        if (name === "pituko") {
          setName("fedorento");
        } else {
          setName("pituko");
        } 
      }}
    > {name} </Text>
  );
}

export default MyName;
