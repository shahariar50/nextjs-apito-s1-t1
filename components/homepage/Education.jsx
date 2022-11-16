import { Accordion } from "react-bootstrap";

const Education = () => {
  return (
    <section className="colorlib-education" data-section="education">
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
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Master Degree Graphic Design
                </Accordion.Header>
                <Accordion.Body>
                  <div className="row">
                    <div className="col-md-6">
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.{" "}
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p>
                        Separated they live in Bookmarksgrove right at the coast
                        of the Semantics, a large language ocean.
                      </p>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Bachelor Degree of Computer Science
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Far far away, behind the word <strong>mountains</strong>,
                    far from the countries Vokalia and Consonantia, there live
                    the blind texts. Separated they live in Bookmarksgrove right
                    at the coast of the Semantics, a large language ocean.
                  </p>
                  <ul>
                    <li>Separated they live in Bookmarksgrove right</li>
                    <li>Separated they live in Bookmarksgrove right</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Diploma in Information Technology
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Far far away, behind the word <strong>mountains</strong>,
                    far from the countries Vokalia and Consonantia, there live
                    the blind texts. Separated they live in Bookmarksgrove right
                    at the coast of the Semantics, a large language ocean.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  Diploma in Information Technology
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Far far away, behind the word <strong>mountains</strong>,
                    far from the countries Vokalia and Consonantia, there live
                    the blind texts. Separated they live in Bookmarksgrove right
                    at the coast of the Semantics, a large language ocean.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  High School Secondary Education
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Far far away, behind the word <strong>mountains</strong>,
                    far from the countries Vokalia and Consonantia, there live
                    the blind texts. Separated they live in Bookmarksgrove right
                    at the coast of the Semantics, a large language ocean.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
