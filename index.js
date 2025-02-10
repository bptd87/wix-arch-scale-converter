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

  const containerStyle = {
    width: "300px",
    margin: "20px auto",
    padding: "20px",
    backgroundColor: "#222",
    color: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    fontFamily: "Arial, sans-serif",
    textAlign: "left",
    boxSizing: "border-box", // Ensures padding and borders fit within the container
  };

  const titleStyle = {
    marginBottom: "20px",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "18px",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "5px",
    color: "#ccc",
  };

  const inputStyle = {
    width: "calc(100% - 20px)", // Ensure it fits within the container
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #444",
    backgroundColor: "#333",
    color: "#fff",
    boxSizing: "border-box", // Important for inputs to respect the container
  };

  const selectStyle = {
    ...inputStyle,
    appearance: "auto", // Ensure the dropdown arrow is visible
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    backgroundColor: "#1e90ff",
    border: "none",
    borderRadius: "5px",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
  };

  const resultStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    marginTop: "15px",
    textAlign: "center",
  };

  return React.createElement(
    "div",
    { style: containerStyle },
    React.createElement("h2", { style: titleStyle }, "Architectural Scale Converter"),
    React.createElement("label", { style: labelStyle }, "Feet"),
    React.createElement("input", {
      type: "number",
      value: feet,
      onChange: (e) => setFeet(e.target.value),
      style: inputStyle,
    }),
    React.createElement("label", { style: labelStyle }, "Inches"),
    React.createElement("input", {
      type: "number",
      value: inches,
      onChange: (e) => setInches(e.target.value),
      style: inputStyle,
    }),
    React.createElement("label", { style: labelStyle }, "Scale"),
    React.createElement(
      "select",
      {
        value: scale,
        onChange: (e) => setScale(e.target.value),
        style: selectStyle,
      },
      React.createElement("option", { value: "96" }, '1/8" = 1\'-0"'),
      React.createElement("option", { value: "48" }, '1/4" = 1\'-0"'),
      React.createElement("option", { value: "24" }, '1/2" = 1\'-0"'),
      React.createElement("option", { value: "12" }, '1" = 1\'-0"'),
      React.createElement("option", { value: "1" }, "1:1 (Full Scale)")
    ),
    React.createElement(
      "button",
      { onClick: handleConvert, style: buttonStyle },
      "Convert"
    ),
    React.createElement(
      "div",
      { style: resultStyle },
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
