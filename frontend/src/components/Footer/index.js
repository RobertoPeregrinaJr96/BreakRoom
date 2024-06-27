// frontend/src/components/Navigation/index.js

import "./style/footer.css";
import { useSelector } from "react-redux";

function Footer() {
  const displaySettings = useSelector((state) => state.session.setting);
  let display = displaySettings.display;
  let mode = displaySettings.mode;

  // CSS logic

  const darkMode = (mode) => {
    return (
      <>
        <div className={`Footer-${mode}`}>
          <ul className="footer-list">
            <li className="footer-item">Developer : Roberto Peregrina Jr</li>
            <li className="footer-item">
              <a
                target="_"
                href="https://www.linkedin.com/in/roberto-peregrina/"
              >
                Linkedin:<i class="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li className="footer-item">
              <a target="_" href="https://github.com/RobertoPeregrinaJr96">
                Github:<i class="fa-brands fa-github"></i>
              </a>
            </li>
            <li className="footer-item">
              <a
                target="_"
                href="https://github.com/RobertoPeregrinaJr96/BreakRoom"
              >
                Github Repository:<i class="fa-brands fa-github"></i>
              </a>
            </li>
            <li className="footer-item">
              <a target="_" href="https://robertoperegrinajr96.github.io/#">
                Portfolio:
              </a>
            </li>
          </ul>
        </div>
      </>
    );
  };

  const lightMode = (mode) => {
    return (
      <>
        <div className={`Footer-${mode}`}>
          <ul className="footer-list">
            <li className="footer-item">Developer : Roberto Peregrina Jr</li>
            <li className="footer-item">
              <a
                target="_"
                href="https://www.linkedin.com/in/roberto-peregrina/"
              >
                Linkedin:<i class="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li className="footer-item">
              <a target="_" href="https://github.com/RobertoPeregrinaJr96">
                Github:<i class="fa-brands fa-github"></i>
              </a>
            </li>
            <li className="footer-item">
              <a
                target="_"
                href="https://github.com/RobertoPeregrinaJr96/BreakRoom"
              >
                Github Repository:<i class="fa-brands fa-github"></i>
              </a>
            </li>
            <li className="footer-item">
              <a target="_" href="https://robertoperegrinajr96.github.io/#">
                Portfolio:
              </a>
            </li>
          </ul>
        </div>
      </>
    );
  };

  if (mode === "dark") {
    return darkMode(mode);
  } else {
    return lightMode(mode);
  }
}

export default Footer;
