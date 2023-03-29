import { useQuery } from "@apollo/client";
import { Element } from "react-scroll";
import { JACKSON_BLOG_DATA } from "../../graphql/homepage.query";

const Blog = () => {
  const { data } = useQuery(JACKSON_BLOG_DATA);

  return (
    <Element name="blog" className="colorlib-blog" data-section="blog">
      {data && (
        <div className="colorlib-narrow-content">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <span className="heading-meta">Read</span>
              <h2 className="colorlib-heading">Recent Blog</h2>
            </div>
          </div>
          <div className="row">
            {data.blogPosts.map((blog: any) => (
              <div
                className="col-md-4 col-sm-6 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="blog-entry">
                  <a href="blog.html" className="blog-img">
                    <picture>
                      <img
                        src={blog.data.cover.url}
                        className="img-responsive"
                        alt="HTML5 Bootstrap Template by colorlib.com"
                      />
                    </picture>
                  </a>
                  <div className="desc">
                    <span>
                      <small>{blog.data.date} </small> |{" "}
                      <small> {blog.workCategories[0].data.name} </small> |{" "}
                      <small>
                        {" "}
                        <i className="icon-bubble3"></i> 4
                      </small>
                    </span>
                    <h3>
                      <a href="blog.html">{blog.data.title}</a>
                    </h3>
                    <p
                      dangerouslySetInnerHTML={{ __html: blog.data.body.html }}
                    ></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-md-12 animate-box">
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

export default Blog;
