import React from "react";

const Input = ({ value, onChange }) => (
  <div className="input">
    <input
      type="text"
      placeholder="Search for emojis..."
      value={value}
      onChange={onChange}
    />
  </div>
);

export default Input;
