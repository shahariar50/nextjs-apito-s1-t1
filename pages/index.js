import Aside from "components/Aside";
import About from "components/homepage/About";
import Education from "components/homepage/Education";
import Experence from "components/homepage/Experence";
import Hero from "components/homepage/Hero";
import Services from "components/homepage/Services";
import Skills from "components/homepage/Skills";
import WorkStatus from "components/homepage/WorkStatus";

export default function Home() {
  return (
    <div id="colorlib-page">
      <div class="container-wrap">
        <a
          href="#"
          class="js-colorlib-nav-toggle colorlib-nav-toggle"
          data-toggle="collapse"
          data-target="#navbar"
          aria-expanded="false"
          aria-controls="navbar"
        >
          <i></i>
        </a>
        <Aside />
        <div id="colorlib-main">
          <Hero />
          <About />
          <Services />
          <WorkStatus />
          <Skills />
          <Education />
          <Experence />
          <section class="colorlib-work" data-section="work">
            <div class="colorlib-narrow-content">
              <div class="row">
                <div
                  class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <span class="heading-meta">My Work</span>
                  <h2 class="colorlib-heading animate-box">Recent Work</h2>
                </div>
              </div>
              <div
                class="row row-bottom-padded-sm animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div class="col-md-12">
                  <p class="work-menu">
                    <span>
                      <a href="#" class="active">
                        Graphic Design
                      </a>
                    </span>{" "}
                    <span>
                      <a href="#">Web Design</a>
                    </span>{" "}
                    <span>
                      <a href="#">Software</a>
                    </span>{" "}
                    <span>
                      <a href="#">Apps</a>
                    </span>
                  </p>
                </div>
              </div>
              <div class="row">
                <div
                  class="col-md-6 animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div
                    class="project"
                    style={{ backgroundImage: "url(images/img-1.jpg)" }}
                  >
                    <div class="desc">
                      <div class="con">
                        <h3>
                          <a href="work.html">Work 01</a>
                        </h3>
                        <span>Website</span>
                        <p class="icon">
                          <span>
                            <a href="#">
                              <i class="icon-share3"></i>
                            </a>
                          </span>
                          <span>
                            <a href="#">
                              <i class="icon-eye"></i> 100
                            </a>
                          </span>
                          <span>
                            <a href="#">
                              <i class="icon-heart"></i> 49
                            </a>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="col-md-6 animate-box"
                  data-animate-effect="fadeInRight"
                >
                  <div
                    class="project"
                    style={{ backgroundImage: "url(images/img-2.jpg)" }}
                  >
                    <div class="desc">
                      <div class="con">
                        <h3>
                          <a href="work.html">Work 02</a>
                        </h3>
                        <span>Animation</span>
                        <p class="icon">
                          <span>
                            <a href="#">
                              <i class="icon-share3"></i>
                            </a>
                          </span>
                          <span>
                            <a href="#">
                              <i class="icon-eye"></i> 100
                            </a>
                          </span>
                          <span>
                            <a href="#">
                              <i class="icon-heart"></i> 49
                            </a>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="col-md-6 animate-box"
                  data-animate-effect="fadeInTop"
                >
                  <div
                    class="project"
                    style={{ backgroundImage: "url(images/img-3.jpg)" }}
                  >
                    <div class="desc">
                      <div class="con">
                        <h3>
                          <a href="work.html">Work 03</a>
                        </h3>
                        <span>Illustration</span>
                        <p class="icon">
                          <span>
                            <a href="#">
                              <i class="icon-share3"></i>
                            </a>
                          </span>
                          <span>
                            <a href="#">
                              <i class="icon-eye"></i> 100
                            </a>
                          </span>
                          <span>
                            <a href="#">
                              <i class="icon-heart"></i> 49
                            </a>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="col-md-6 animate-box"
                  data-animate-effect="fadeInBottom"
                >
                  <div
                    class="project"
                    style={{ backgroundImage: "url(images/img-4.jpg)" }}
                  >
                    <div class="desc">
                      <div class="con">
                        <h3>
                          <a href="work.html">Work 04</a>
                        </h3>
                        <span>Application</span>
                        <p class="icon">
                          <span>
                            <a href="#">
                              <i class="icon-share3"></i>
                            </a>
                          </span>
                          <span>
                            <a href="#">
                              <i class="icon-eye"></i> 100
                            </a>
                          </span>
                          <span>
                            <a href="#">
                              <i class="icon-heart"></i> 49
                            </a>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="col-md-6 animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div
                    class="project"
                    style={{ backgroundImage: "url(images/img-5.jpg)" }}
                  >
                    <div class="desc">
                      <div class="con">
                        <h3>
                          <a href="work.html">Work 05</a>
                        </h3>
                        <span>Graphic, Logo</span>
                        <p class="icon">
                          <span>
                            <a href="#">
                              <i class="icon-share3"></i>
                            </a>
                          </span>
                          <span>
                            <a href="#">
                              <i class="icon-eye"></i> 100
                            </a>
                          </span>
                          <span>
                            <a href="#">
                              <i class="icon-heart"></i> 49
                            </a>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="col-md-6 animate-box"
                  data-animate-effect="fadeInRight"
                >
                  <div
                    class="project"
                    style={{ backgroundImage: "url(images/img-6.jpg)" }}
                  >
                    <div class="desc">
                      <div class="con">
                        <h3>
                          <a href="work.html">Work 06</a>
                        </h3>
                        <span>Web Design</span>
                        <p class="icon">
                          <span>
                            <a href="#">
                              <i class="icon-share3"></i>
                            </a>
                          </span>
                          <span>
                            <a href="#">
                              <i class="icon-eye"></i> 100
                            </a>
                          </span>
                          <span>
                            <a href="#">
                              <i class="icon-heart"></i> 49
                            </a>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 animate-box">
                  <p>
                    <a href="#" class="btn btn-primary btn-lg btn-load-more">
                      Load more <i class="icon-reload"></i>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section class="colorlib-blog" data-section="blog">
            <div class="colorlib-narrow-content">
              <div class="row">
                <div
                  class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <span class="heading-meta">Read</span>
                  <h2 class="colorlib-heading">Recent Blog</h2>
                </div>
              </div>
              <div class="row">
                <div
                  class="col-md-4 col-sm-6 animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div class="blog-entry">
                    <a href="blog.html" class="blog-img">
                      <img
                        src="images/blog-1.jpg"
                        class="img-responsive"
                        alt="HTML5 Bootstrap Template by colorlib.com"
                      />
                    </a>
                    <div class="desc">
                      <span>
                        <small>April 14, 2018 </small> |{" "}
                        <small> Web Design </small> |{" "}
                        <small>
                          {" "}
                          <i class="icon-bubble3"></i> 4
                        </small>
                      </span>
                      <h3>
                        <a href="blog.html">Renovating National Gallery</a>
                      </h3>
                      <p>
                        Separated they live in Bookmarksgrove right at the coast
                        of the Semantics, a large language ocean.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="col-md-4 col-sm-6 animate-box"
                  data-animate-effect="fadeInRight"
                >
                  <div class="blog-entry">
                    <a href="blog.html" class="blog-img">
                      <img
                        src="images/blog-2.jpg"
                        class="img-responsive"
                        alt="HTML5 Bootstrap Template by colorlib.com"
                      />
                    </a>
                    <div class="desc">
                      <span>
                        <small>April 14, 2018 </small> |{" "}
                        <small> Web Design </small> |{" "}
                        <small>
                          {" "}
                          <i class="icon-bubble3"></i> 4
                        </small>
                      </span>
                      <h3>
                        <a href="blog.html">Wordpress for a Beginner</a>
                      </h3>
                      <p>
                        Separated they live in Bookmarksgrove right at the coast
                        of the Semantics, a large language ocean.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="col-md-4 col-sm-6 animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div class="blog-entry">
                    <a href="blog.html" class="blog-img">
                      <img
                        src="images/blog-3.jpg"
                        class="img-responsive"
                        alt="HTML5 Bootstrap Template by colorlib.com"
                      />
                    </a>
                    <div class="desc">
                      <span>
                        <small>April 14, 2018 </small> |{" "}
                        <small> Inspiration </small> |{" "}
                        <small>
                          {" "}
                          <i class="icon-bubble3"></i> 4
                        </small>
                      </span>
                      <h3>
                        <a href="blog.html">Make website from scratch</a>
                      </h3>
                      <p>
                        Separated they live in Bookmarksgrove right at the coast
                        of the Semantics, a large language ocean.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 animate-box">
                  <p>
                    <a href="#" class="btn btn-primary btn-lg btn-load-more">
                      Load more <i class="icon-reload"></i>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section class="colorlib-contact" data-section="contact">
            <div class="colorlib-narrow-content">
              <div class="row">
                <div
                  class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <span class="heading-meta">Get in Touch</span>
                  <h2 class="colorlib-heading">Contact</h2>
                </div>
              </div>
              <div class="row">
                <div class="col-md-5">
                  <div
                    class="colorlib-feature colorlib-feature-sm animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div class="colorlib-icon">
                      <i class="icon-globe-outline"></i>
                    </div>
                    <div class="colorlib-text">
                      <p>
                        <a href="#">info@domain.com</a>
                      </p>
                    </div>
                  </div>

                  <div
                    class="colorlib-feature colorlib-feature-sm animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div class="colorlib-icon">
                      <i class="icon-map"></i>
                    </div>
                    <div class="colorlib-text">
                      <p>198 West 21th Street, Suite 721 New York NY 10016</p>
                    </div>
                  </div>

                  <div
                    class="colorlib-feature colorlib-feature-sm animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div class="colorlib-icon">
                      <i class="icon-phone"></i>
                    </div>
                    <div class="colorlib-text">
                      <p>
                        <a href="tel://">+123 456 7890</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-7 col-md-push-1">
                  <div class="row">
                    <div
                      class="col-md-10 col-md-offset-1 col-md-pull-1 animate-box"
                      data-animate-effect="fadeInRight"
                    >
                      <form action="">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Name"
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Email"
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Subject"
                          />
                        </div>
                        <div class="form-group">
                          <textarea
                            name=""
                            id="message"
                            cols="30"
                            rows="7"
                            class="form-control"
                            placeholder="Message"
                          ></textarea>
                        </div>
                        <div class="form-group">
                          <input
                            type="submit"
                            class="btn btn-primary btn-send-message"
                            value="Send Message"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
