import { useQuery } from "@apollo/client";
import { Element } from "react-scroll";
import { JACKSON_SKILL_DATA } from "../../graphql/homepage.query";

const Skills = () => {
  const { data } = useQuery(JACKSON_SKILL_DATA);

  return (
    <Element name="skills" className="colorlib-skills" data-section="skills">
      {data && (
        <div className="colorlib-narrow-content">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <span className="heading-meta">My Specialty</span>
              <h2 className="colorlib-heading animate-box">My Skills</h2>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-12 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <p
                dangerouslySetInnerHTML={{
                  __html: data.skill.data.description.html,
                }}
              ></p>
            </div>
            {data.skill.data.skills.map((skill: any, index: number) => (
              <div className="col-md-6 animate-box" key={skill.id}>
                <div className="progress-wrap">
                  <h3>{skill.name}</h3>
                  <div className="progress">
                    <div
                      className={`progress-bar color-${index + 1}`}
                      style={{ width: `${skill.skill_percentage}%` }}
                    >
                      <span>{skill.skill_percentage}%</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </Element>
  );
};

export default Skills;
