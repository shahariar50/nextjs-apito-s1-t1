import { useQuery } from "@apollo/client";
import { Element } from "react-scroll";
import { JACKSON_ABOUT_DATA } from "../../graphql/homepage.query";

/* eslint-disable react/no-unescaped-entities */
const About = () => {
  const { data } = useQuery(JACKSON_ABOUT_DATA);

  return (
    <Element name="about" className="colorlib-about" data-section="about">
      {data && (
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-12">
              <div
                className="row row-bottom-padded-sm animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="col-md-12">
                  <div className="about-desc">
                    <span className="heading-meta">About Us</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: data.about.data.long_bio.html,
                      }}
                    ></p>
                  </div>
                </div>
              </div>
              <div className="row">
                {data.about?.data?.skills?.map((skill: any) => (
                  <div
                    className="col-md-3 animate-box"
                    data-animate-effect="fadeInLeft"
                    key={skill.id}
                  >
                    <div
                      className="services"
                      style={{ borderBottom: `2px solid #${skill.color_code}` }}
                    >
                      <span className="icon2">
                        <img src={skill.icon.url} alt="icon" />
                      </span>
                      <h3>{skill.name}</h3>
                    </div>
                  </div>
                ))}
              </div>
              {data.about?.data?.happy_text && (
                <div className="row">
                  <div
                    className="col-md-12 animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="hire">
                      <h2>{data.about?.data?.happy_text}</h2>
                      <a href="#" className="btn-hire">
                        Hire me
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </Element>
  );
};

export default About;
