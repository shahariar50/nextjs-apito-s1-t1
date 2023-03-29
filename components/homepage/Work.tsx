import { useQuery } from "@apollo/client";
import { useState } from "react";
import { Element } from "react-scroll";
import { JACKSON_WORKS_DATA } from "../../graphql/homepage.query";

const Work = () => {
  const [selectedGallery, setSelectedGallery] = useState("All");
  const { data } = useQuery(JACKSON_WORKS_DATA);

  let categories = ["All"];
  if (data?.works) {
    categories = [
      // @ts-ignore
      ...new Set([
        ...categories,
        ...data?.works.reduce(
          (accum: any, item: any) => [...accum, ...item.data.categories],
          []
        ),
      ]),
    ];
  }

  const galleryList = [
    {
      id: 1,
      img: "/static/img-1.jpg",
      title: "Work 01",
      category: "Website",
      category_slag: ["all", "software"],
    },
    {
      id: 2,
      img: "/static/img-2.jpg",
      title: "Work 02",
      category: "Animation",
      category_slag: ["all", "graphicDesign"],
    },
    {
      id: 3,
      img: "/static/img-3.jpg",
      title: "Work 03",
      category: "Illustration",
      category_slag: ["all", "graphicDesign"],
    },
    {
      id: 4,
      img: "/static/img-4.jpg",
      title: "Work 04",
      category: "Application",
      category_slag: ["all", "apps"],
    },
    {
      id: 5,
      img: "/static/img-5.jpg",
      title: "Work 05",
      category: "Graphic, Logo",
      category_slag: ["all", "graphicDesign"],
    },
    {
      id: 6,
      img: "/static/img-6.jpg",
      title: "Work 06",
      category: "Web Design",
      category_slag: ["all", "webDesign"],
    },
  ];

  return (
    <Element name="work" className="colorlib-work" data-section="work">
      {data && (
        <div className="colorlib-narrow-content">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3"
              data-animate-effect="fadeInLeft"
            >
              <span className="heading-meta">My Work</span>
              <h2 className="colorlib-heading">Recent Work</h2>
            </div>
          </div>
          <div
            className="row row-bottom-padded-sm"
            data-animate-effect="fadeInLeft"
          >
            <div className="col-md-12">
              <p className="work-menu">
                {categories.map((category) => (
                  <span
                    className={selectedGallery === category ? "active" : ""}
                    onClick={() => setSelectedGallery(category)}
                  >
                    {category}
                  </span>
                ))}
              </p>
            </div>
          </div>
          <div className="row">
            {data.works
              .filter((gallery: any) =>
                ["All", ...gallery.data.categories].includes(selectedGallery)
              )
              .map((gallery: any) => (
                <div
                  className="col-md-6"
                  data-animate-effect="fadeInLeft"
                  key={gallery.id}
                >
                  <div
                    className="project"
                    style={{
                      backgroundImage: `url(${gallery.data.cover.url})`,
                    }}
                  >
                    <div className="desc">
                      <div className="con">
                        <h3>
                          <a href="work.html">{gallery.data.title}</a>
                        </h3>
                        {gallery.data.categories.map((item: string) => (
                          <span>{item} </span>
                        ))}
                        <p className="icon">
                          <span>
                            <a href="#">
                              <i className="icon-share3"></i>
                            </a>
                          </span>
                          <span>
                            <a href="#">
                              <i className="icon-eye"></i> 100
                            </a>
                          </span>
                          <span>
                            <a href="#">
                              <i className="icon-heart"></i> 49
                            </a>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="row">
            <div className="col-md-12">
              <p>
                <a href="#" className="btn btn-primary btn-lg btn-load-more">
                  Load more <i className="icon-reload"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </Element>
  );
};

export default Work;
