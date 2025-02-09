import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import reactToWebComponent from "react-to-webcomponent";

function ArchScaleConverter() {
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [scale, setScale] = useState("96");
  const [conversion, setConversion] = useState("");

  const handleConvert = () => {
    const totalInches = parseFloat(feet || 0) * 12 + parseFloat(inches || 0);
    const totalMillimeters = totalInches * 25.4;
    const scaledSize = (totalMillimeters / parseFloat(scale)).toFixed(2);
    setConversion(scaledSize);
  };

  return (
    <div>
      <h2>Architectural Scale Converter</h2>
      <label>Feet</label>
      <input
        type="number"
        value={feet}
        onChange={(e) => setFeet(e.target.value)}
      />
      <label>Inches</label>
      <input
        type="number"
        value={inches}
        onChange={(e) => setInches(e.target.value)}
      />
      <label>Scale</label>
      <select value={scale} onChange={(e) => setScale(e.target.value)}>
        <option value="96">1/8" = 1'-0"</option>
        <option value="48">1/4" = 1'-0"</option>
        <option value="24">1/2" = 1'-0"</option>
        <option value="12">1" = 1'-0"</option>
        <option value="1">1:1 (Full Scale)</option>
      </select>
      <button onClick={handleConvert}>Convert</button>
      <h3>Converted Size: {conversion} mm</h3>
    </div>
  );
}

const ArchScaleConverterElement = reactToWebComponent(ArchScaleConverter, React, ReactDOM);
customElements.define("arch-scale-converter", ArchScaleConverterElement);
