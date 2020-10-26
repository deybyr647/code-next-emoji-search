import React from "react";
import * as src from "./util/getSrc";
import useClipboard from "./hooks/useClipboard";

let Results = ({ emojis }) => {
  useClipboard(".copyme");

  return (
    <>
      <div className="results title">
        <h4>Results</h4>
      </div>

      <div className="results">
        <ul>
          {emojis.map(emoji => (
            <li
              className="copyme"
              data-clipboard-text={emoji.symbol}
              key={emoji.title}
            >
              <img src={src.getSrc(emoji.symbol)} width={32} height={32} />
              <span>{emoji.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Results;
