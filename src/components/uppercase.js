import "./toUppercase.css";
const ToUppercase = ({ color, text }) => {
  return <h1 style={{ color: color }}>{text.toUpperCase()}</h1>;
};

ToUppercase.defaultProps = {
  color: "#379fac",
  text: "Quest React.js básico DevQuest",
};

export default ToUppercase;
