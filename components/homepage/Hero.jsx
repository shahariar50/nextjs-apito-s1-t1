/* eslint-disable react/no-unescaped-entities */
import bg from "/public/static/img_bg_1.jpg";

const Hero = () => {
  return (
    <section id="colorlib-hero" class="js-fullheight" data-section="home">
      <div className="flexslider js-fullheight">
        <div className="slides">
          <div
            className="flexsliderInner"
            style={{ backgroundImage: `url(${bg.src})`, height: "100vh" }}
          >
            <div class="overlay"></div>
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                  <div class="slider-text-inner js-fullheight">
                    <div class="desc">
                      <h1>
                        Hi! <br />
                        I'm Jackson
                      </h1>
                      <h2>
                        100% html5 bootstrap templates Made by{" "}
                        <a
                          href="https://colorlib.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          colorlib.com
                        </a>
                      </h2>
                      <p>
                        <a class="btn btn-primary btn-learn">
                          Download CV <i class="icon-download4"></i>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
