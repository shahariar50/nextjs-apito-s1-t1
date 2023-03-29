import { useQuery } from "@apollo/client";
import { Link } from "react-scroll";
import { JACKSON_SITEINFO_DATA } from "../graphql/homepage.query";

const Aside = () => {
  const { data } = useQuery(JACKSON_SITEINFO_DATA);

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
          style={{
            backgroundImage: `url(${data?.siteInfo?.data?.avatar?.url})`,
          }}
        ></div>
        <h1 id="colorlib-logo">
          <a href="index.html">{data?.siteInfo?.data?.website_title}</a>
        </h1>
        <span className="position">{data?.siteInfo?.data?.tag_line}</span>
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
          <small>{data?.siteInfo?.data?.copyright}</small>
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
