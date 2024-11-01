// Date: 31/10/2024
// Description: Footer component
import "../styles/footer.css";

import { TbHomeSearch } from "react-icons/tb";
import { SiTinyletter } from "react-icons/si";
import { BiSolidUserAccount } from "react-icons/bi";

export function Footer() {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <ol className="footer-nav-list">
          
          <li className="footer-nav-item">
            <a href="/" className="footer-nav-link">
              <TbHomeSearch /> HOME
            </a>
          </li>

          <li className="footer-nav-item">
            <a href="/lists" className="footer-nav-link">
              <SiTinyletter />
              MY LISTS
            </a>
          </li>
          
          <li className="footer-nav-item">
            <a href="/addList" className="footer-nav-link">
              NEW LIST
            </a>
          </li>

          <li className="footer-nav-item">
            <a href="/account" className="footer-nav-link">
              <BiSolidUserAccount /> MON COMPTE
            </a>
          </li>

          
        </ol>
      </nav>
    </footer>
  );
}
