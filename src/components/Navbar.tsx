import "../styles/navbar.css";
import CottageSharpIcon from "@mui/icons-material/CottageSharp";
import NotificationsActiveSharpIcon from "@mui/icons-material/NotificationsActiveSharp";
import QueueSharpIcon from "@mui/icons-material/QueueSharp";
import FiberNewSharpIcon from "@mui/icons-material/FiberNewSharp";
import SwitchAccountSharpIcon from "@mui/icons-material/SwitchAccountSharp";

interface NavbarProps {
  handleOpen: () => void;
}

export function Navbar({ handleOpen }: NavbarProps) {
  return (
    <nav className="navbar-nav">
      <ol className="navbar-nav-list">
        <li className="navbar-nav-item">
          <a href="/" className="navbar-nav-link">
            <CottageSharpIcon />
          </a>
        </li>

        <li className="navbar-nav-item">
          <a href="/" className="navbar-nav-link">
            <NotificationsActiveSharpIcon />
          </a>
        </li>

        <li className="navbar-nav-item">
          <a href="#" className="navbar-nav-link" onClick={(e) => { e.preventDefault(); handleOpen(); }}>
            <QueueSharpIcon />
          </a>
        </li>

        <li className="navbar-nav-item">
          <a href="/addList" className="navbar-nav-link">
            <FiberNewSharpIcon />
          </a>
        </li>

        <li className="navbar-nav-item">
          <a href="/account" className="navbar-nav-link">
            <SwitchAccountSharpIcon />
          </a>
        </li>
      </ol>
    </nav>
  );
}

export default Navbar;