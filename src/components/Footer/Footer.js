import git from '../../images/Vector.svg';
import facebook from '../../images/facebook.svg';
import whatsapp from '@mui/icons-material/WhatsApp';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__copyrights">© {new Date().getFullYear()} Daniel Malka, portfolio page</p>
      <nav className="footer__wrap">
        <ul className="footer__imgs">
          <li>
            <a target="_blank" href="https://github.com/daniel-malka" className="footer__git footer__button" rel="noreferrer">
              <img src={git} alt="git" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/danmalk/"
              className="footer__git footer__button"
              rel="noreferrer"
            >
              <img src={facebook} alt="facebook" />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://wa.me/9720526999847" className="footer__git footer__button" rel="noreferrer">
              <img src={whatsapp} alt="WhatsApp Icon" />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
