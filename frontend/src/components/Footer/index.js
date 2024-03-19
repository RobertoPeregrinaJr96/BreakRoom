// frontend/src/components/Navigation/index.js

import "./style/footer.css";

function Footer() {
  return (
    <>
      <ul className="footer-list">
        <li className="footer-item">Developer : Roberto Peregrina Jr</li>
        <li className="footer-item">
          <a target="_" href="https://www.linkedin.com/in/roberto-peregrina/">
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
    </>
  );
}

export default Footer;
