import { useQuery } from "@apollo/client";
import { Element } from "react-scroll";
import { JACKSON_EXPERIENCE_DATA } from "../../graphql/homepage.query";

const Experence = () => {
  const { data } = useQuery(JACKSON_EXPERIENCE_DATA);

  return (
    <Element
      name="experience"
      className="colorlib-experience"
      data-section="experience"
    >
      {data && (
        <div className="colorlib-narrow-content">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <span className="heading-meta">Experience</span>
              <h2 className="colorlib-heading animate-box">Work Experience</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="timeline-centered">
                {data.experiences.map((exprience: any, index: number) => (
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                    key={exprience.id}
                  >
                    <div className="timeline-entry-inner">
                      <div className={`timeline-icon color-${index + 1}`}>
                        <i className="icon-pen2"></i>
                      </div>

                      <div className="timeline-label">
                        <h2>
                          <a href="#">{exprience.data.title}</a>{" "}
                          <span>{exprience.data.from_and_to_date}</span>
                        </h2>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: exprience.data.details.html,
                          }}
                        ></p>
                      </div>
                    </div>
                  </article>
                ))}

                <article
                  className="timeline-entry begin animate-box"
                  data-animate-effect="fadeInBottom"
                >
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-none"></div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      )}
    </Element>
  );
};

export default Experence;
