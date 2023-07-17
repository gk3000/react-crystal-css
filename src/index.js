import React from "react";

const Grid = (props) => {
  // passing a number to display this number of columns with equal width
  // passing other value to define any type of template like '1fr 2fr'
  let pattern = props.columns.split(" ");
  let template = "";
  pattern.length === 1 || pattern.length === 0
    ? (template = `repeat(${props.columns || 1}, 1fr)`)
    : (template = `${pattern.join(" ")}`);
  return (
    <div className='grid' 
      style={{
        display: "grid",
        gridTemplateColumns: template,
        gap: props.gap || "1em"
      }}
    >
      {props.children}
    </div>
  );
};

export default Grid