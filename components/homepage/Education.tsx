import { useQuery } from "@apollo/client";
import { Accordion } from "react-bootstrap";
import { Element } from "react-scroll";
import { JACKSON_EDUCATION_DATA } from "../../graphql/homepage.query";

const Education = () => {
  const { data } = useQuery(JACKSON_EDUCATION_DATA);

  return (
    <Element
      name="education"
      className="colorlib-education"
      data-section="education"
    >
      {data && (
        <div className="colorlib-narrow-content">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <span className="heading-meta">Education</span>
              <h2 className="colorlib-heading animate-box">Education</h2>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-12 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <Accordion defaultActiveKey="0">
                {data.educations.map((education: any, index: number) => (
                  <Accordion.Item key={education.id} eventKey={`${index}`}>
                    <Accordion.Header>{education.data.title}</Accordion.Header>
                    <Accordion.Body>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: education.data.details.html,
                        }}
                      ></p>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      )}
    </Element>
  );
};

export default Education;
