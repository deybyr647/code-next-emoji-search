import React from "react";

import { getSrc } from "./util/getSrc";

const EMOJI1_SRC = getSrc("☁️");

let Header = () => (
  <header className="header">
    <h1>
      <img src={EMOJI1_SRC} width={32} height={32} /> Emoji Search{" "}
      <img src={EMOJI1_SRC} width={32} height={32} />
    </h1>
  </header>
);

export default Header;
