import "./button.css";
const showLabel = (button) => {
  alert(`A label desse botão é + ${button.target.outerText}`);
};
const Button = (props) => {
  return (
    <button className="btn" onClick={showLabel}>
      {props.label}
    </button>
  );
};

Button.defaultProps = {
  label: "Clique aqui",
};

export default Button;
