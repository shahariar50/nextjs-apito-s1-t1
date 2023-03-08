/* eslint-disable react/no-unescaped-entities */
import { Element } from "react-scroll";
import { EffectFade, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Hero = () => {
  return (
    <Element
      name="hero"
      id="colorlib-hero"
      className="js-fullheight"
      data-section="home"
    >
      <Swiper
        modules={[EffectFade, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
      >
        <SwiperSlide
          style={{
            backgroundImage: `url(/static/img_bg_1.jpg)`,
            height: "100vh",
          }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                <div className="slider-text-inner js-fullheight">
                  <div className="desc">
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
                      <a className="btn btn-primary btn-learn">
                        Download CV <i className="icon-download4"></i>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `url(/static/img_bg_2.jpg)`,
            height: "100vh",
          }}
        >
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                <div class="slider-text-inner">
                  <div class="desc">
                    <h1>
                      I am <br />a Designer
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
                        View Portfolio <i class="icon-briefcase3"></i>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </Element>
  );
};

export default Hero;
