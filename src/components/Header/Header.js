import "./Header.scss";
import { data } from "../../data/data";

const Header = () => {
  return (
    <header className="nav">
      <a href="#Home">
        <img alt="logo" src="logo.png" height="100%" />
      </a>
      <ul className="nav__items">
        {data.nav.map((item) => (
          <li className="nav__items--single" key={item}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
