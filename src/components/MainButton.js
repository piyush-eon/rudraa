import "./styles.scss";

const MainButton = ({ children, type }) => {
  return (
    <button className="mainbutton" type={type}>
      {children}
    </button>
  );
};

export default MainButton;
