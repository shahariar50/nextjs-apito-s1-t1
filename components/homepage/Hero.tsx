/* eslint-disable react/no-unescaped-entities */
import { useQuery } from "@apollo/client";
import { Element } from "react-scroll";
import { EffectFade, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { JACKSON_HERO_DATA } from "../../graphql/homepage.query";

const Hero = () => {
  const { data } = useQuery(JACKSON_HERO_DATA);

  return (
    <Element
      name="hero"
      id="colorlib-hero"
      className="js-fullheight"
      data-section="home"
    >
      {data?.home?.data?.heros?.length ? (
        <Swiper
          modules={[EffectFade, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
        >
          {data.home.data.heros.map((slide: any) => (
            <SwiperSlide
              style={{
                backgroundImage: `url(${slide.bg_image.url})`,
                height: "100vh",
              }}
              key={slide.id}
            >
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                    <div className="slider-text-inner js-fullheight">
                      <div className="desc">
                        <h1
                          dangerouslySetInnerHTML={{
                            __html: slide.greeting_text.html,
                          }}
                        ></h1>
                        <h2
                          dangerouslySetInnerHTML={{
                            __html: slide.tag_line.html,
                          }}
                        ></h2>
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
          ))}
        </Swiper>
      ) : (
        ""
      )}
    </Element>
  );
};

export default Hero;
