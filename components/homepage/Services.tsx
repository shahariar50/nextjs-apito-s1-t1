import { useQuery } from "@apollo/client";
import { Element } from "react-scroll";
import { JACKSON_SERVICES_DATA } from "../../graphql/homepage.query";

const Services = () => {
  const { data } = useQuery(JACKSON_SERVICES_DATA);

  return (
    <Element
      name="services"
      className="colorlib-services"
      data-section="services"
    >
      {data && (
        <div className="colorlib-narrow-content">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <span className="heading-meta">What I do?</span>
              <h2 className="colorlib-heading">
                Here are some of my expertise
              </h2>
            </div>
          </div>
          <div className="row row-pt-md">
            {data.service.data.experiences.map(
              (experence: any, index: number) => (
                <div
                  className="col-md-4 text-center animate-box"
                  key={experence.id}
                >
                  <div className={`services color-${index + 1}`}>
                    <span
                      className="icon"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img src={experence.icon.url} alt="icon" />
                    </span>
                    <div className="desc">
                      <h3>{experence.title}</h3>
                      <p>{experence.description}</p>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      )}
    </Element>
  );
};

export default Services;
