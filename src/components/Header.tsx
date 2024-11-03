import "../styles/global.css";
import "../styles/header.css";
import Navbar from "../components/Navbar";

export function Header({ handleOpen }) {
  return (
    <header className="header">
      <div className="header-logo">
        <h1>LOGO APP HERE</h1>
      </div>

      <div className="header-nav">
        <Navbar handleOpen={handleOpen} />
      </div>

      <div className="header-signin">
        <h2>TESTING DIV RIGHT</h2>
      </div>
    </header>
  );
}

export default Header;