import './button.css'

const Button = ({ className, type = "button", colorStyle, onClick, disabled = false, children }) => {
  return (
    <button
      type={type}
      className={`button ${className} ${colorStyle}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;