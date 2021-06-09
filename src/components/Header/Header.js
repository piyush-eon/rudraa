import "./Header.scss";
import { data } from "../../data/data";

const Header = () => {
  console.log(data.nav);

  return (
    <header className="nav">
      <img alt="logo" src="logo.png" height="100%" />
      <ul className="nav__items">
        {data.nav.map((item) => (
          <li className="nav__items--single">{item}</li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
