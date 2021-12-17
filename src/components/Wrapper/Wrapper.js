import React from "react";
import "./Wrapper.css";

import Text from "../Text";
import Button from "../Button";

export default function Wrapper({ btn, text }) {
  return (
    <div className="btn-wrap">
      <Text text={text} />
      <Button {...btn} />
    </div>
  );
}
