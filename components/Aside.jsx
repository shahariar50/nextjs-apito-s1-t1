import { Link } from "react-scroll";

const Aside = () => {
  return (
    <aside
      id="colorlib-aside"
      role="complementary"
      className="border js-fullheight"
      style={{ height: "100vh" }}
    >
      <div className="text-center">
        <div
          className="author-img"
          style={{ backgroundImage: "url(images/about.jpg);" }}
        ></div>
        <h1 id="colorlib-logo">
          <a href="index.html">Jackson Ford</a>
        </h1>
        <span className="position">
          <a href="#">UI/UX/Designer</a> in Philippines
        </span>
      </div>
      <nav id="colorlib-main-menu" role="navigation" className="navbar">
        <div id="navbar" className="collapse">
          <ul>
            <li className="active">
              <Link
                activeClass="active"
                to="hero"
                spy={true}
                smooth={true}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                duration={500}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                duration={500}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="education"
                spy={true}
                smooth={true}
                duration={500}
              >
                Education
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="experience"
                spy={true}
                smooth={true}
                duration={500}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="work"
                spy={true}
                smooth={true}
                duration={500}
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="blog"
                spy={true}
                smooth={true}
                duration={500}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="colorlib-footer">
        <p>
          <small>
            &copy; Copyright {new Date().getFullYear()} All rights reserved.
            Made with <i className="icon-heart" aria-hidden="true"></i> by{" "}
            <a href="https://colorlib.com" target="_blank" rel="noreferrer">
              Colorlib
            </a>
            <span>
              Distributed by{" "}
              <a href="https://themewagon.com" target="_blank" rel="noreferrer">
                ThemeWagon
              </a>
            </span>{" "}
            <span>
              Demo Images:{" "}
              <a href="https://unsplash.com/" target="_blank" rel="noreferrer">
                Unsplash.com
              </a>
            </span>
          </small>
        </p>
        <ul>
          <li>
            <a href="#">
              <i className="icon-facebook2"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="icon-twitter2"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="icon-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="icon-linkedin2"></i>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
