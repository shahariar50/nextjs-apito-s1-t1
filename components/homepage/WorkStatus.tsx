import { useQuery } from "@apollo/client";
import { JACKSON_SERVICES_DATA } from "../../graphql/homepage.query";

const WorkStatus = () => {
  const { data } = useQuery(JACKSON_SERVICES_DATA);

  return (
    <div>
      {data && (
        <section
          id="colorlib-counter"
          className="colorlib-counters"
          style={{ backgroundImage: `url(${data.service.data.statistics_bg})` }}
          data-stellar-background-ratio="0.5"
        >
          <div className="overlay"></div>
          <div className="colorlib-narrow-content">
            <div className="row"></div>
            <div className="row">
              {data.service.data.statistics.map((statistic: any) => (
                <div
                  className="col-md-3 text-center animate-box"
                  key={statistic.id}
                >
                  <span
                    className="colorlib-counter js-counter"
                    data-from="0"
                    data-to="309"
                    data-speed="5000"
                    data-refresh-interval="50"
                  >
                    {statistic.number}
                  </span>
                  <span className="colorlib-counter-label">
                    {statistic.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default WorkStatus;
