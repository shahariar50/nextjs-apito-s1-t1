import { useState } from "react";
import { Element } from "react-scroll";

const Work = () => {
  const [selectedGallery, setSelectedGallery] = useState("all");

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
              <span
                className={selectedGallery === "all" ? "active" : ""}
                onClick={() => setSelectedGallery("all")}
              >
                All
              </span>{" "}
              <span
                className={selectedGallery === "graphicDesign" ? "active" : ""}
                onClick={() => setSelectedGallery("graphicDesign")}
              >
                Graphic Design
              </span>
              <span
                className={selectedGallery === "webDesign" ? "active" : ""}
                onClick={() => setSelectedGallery("webDesign")}
              >
                Web Design
              </span>{" "}
              <span
                className={selectedGallery === "software" ? "active" : ""}
                onClick={() => setSelectedGallery("software")}
              >
                Software
              </span>{" "}
              <span
                className={selectedGallery === "apps" ? "active" : ""}
                onClick={() => setSelectedGallery("apps")}
              >
                Apps
              </span>
            </p>
          </div>
        </div>
        <div className="row">
          {galleryList
            .filter((gallery) =>
              gallery.category_slag.includes(selectedGallery)
            )
            .map((gallery) => (
              <div
                className="col-md-6"
                data-animate-effect="fadeInLeft"
                key={gallery.id}
              >
                <div
                  className="project"
                  style={{ backgroundImage: `url(${gallery.img})` }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="work.html">{gallery.title}</a>
                      </h3>
                      <span>{gallery.category}</span>
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
    </Element>
  );
};

export default Work;
