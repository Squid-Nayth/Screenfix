const Button = ({ name, containerClass, onClickFunc}) => {

  return (
    <button className={`btn ${containerClass}`}
        onClick={onClickFunc}
    >
        {name}
    </button>
  );
};

export default Button;