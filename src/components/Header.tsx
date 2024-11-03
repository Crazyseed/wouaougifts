import "../styles/global.css";
import "../styles/header.css";
import { Navbar } from "../components/Navbar";

export function Header() {
  return (
    <header className="header">

      <div className="header-logo">
        <h1>LOGO APP HERE</h1>
      </div>

      <div className="header-nav">
          <Navbar />
      </div>

      <div className="header-signin">
        <h2>TESING DIV RIGHT</h2>
      </div>
      
    </header>
  );
}
