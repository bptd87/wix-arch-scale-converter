const { useState } = React;

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

  return React.createElement(
    "div",
    null,
    React.createElement("h2", null, "Architectural Scale Converter"),
    React.createElement("label", null, "Feet"),
    React.createElement("input", {
      type: "number",
      value: feet,
      onChange: (e) => setFeet(e.target.value),
    }),
    React.createElement("label", null, "Inches"),
    React.createElement("input", {
      type: "number",
      value: inches,
      onChange: (e) => setInches(e.target.value),
    }),
    React.createElement("label", null, "Scale"),
    React.createElement(
      "select",
      {
        value: scale,
        onChange: (e) => setScale(e.target.value),
      },
      React.createElement("option", { value: "96" }, '1/8" = 1\'-0"'),
      React.createElement("option", { value: "48" }, '1/4" = 1\'-0"'),
      React.createElement("option", { value: "24" }, '1/2" = 1\'-0"'),
      React.createElement("option", { value: "12" }, '1" = 1\'-0"'),
      React.createElement("option", { value: "1" }, "1:1 (Full Scale)")
    ),
    React.createElement(
      "button",
      { onClick: handleConvert },
      "Convert"
    ),
    React.createElement(
      "h3",
      null,
      `Converted Size: ${conversion} mm`
    )
  );
}

const ArchScaleConverterElement = reactToWebComponent(
  ArchScaleConverter,
  React,
  ReactDOM
);
customElements.define("arch-scale-converter", ArchScaleConverterElement);

