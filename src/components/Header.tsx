import "../styles/global.css"
import "../styles/header.css";

export function Header() {
  return (
    <div>
      <header className="header">
        <nav className="header-nav">
          <div>
            <ol className="header-nav-list">
              <li>
                <a href="/" target="_blank" rel="noopener noreferrer" className="footer-nav-link">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" target="_blank" rel="noopener noreferrer" className="footer-nav-link" >
                  About
                </a>
              </li>
              <li>
                <a href="/contact" target="_blank" rel="noopener noreferrer" className="footer-nav-link">
                  Contact
                </a>
              </li>
            </ol>
          </div>
        </nav>
      </header>
    </div>
  );
}
