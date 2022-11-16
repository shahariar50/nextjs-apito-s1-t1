import Aside from "components/Aside";
import About from "components/homepage/About";
import Blog from "components/homepage/Blog";
import Contact from "components/homepage/Contact";
import Education from "components/homepage/Education";
import Experence from "components/homepage/Experence";
import Hero from "components/homepage/Hero";
import Services from "components/homepage/Services";
import Skills from "components/homepage/Skills";
import Work from "components/homepage/Work";
import WorkStatus from "components/homepage/WorkStatus";
import Script from "next/script";
import { useEffect } from "react";
import "/public/static/js/loader.js";

export default function Home() {
  useEffect(() => {
    window.$ = window.jQuery = require("jquery");
  }, []);

  return (
    <div id="colorlib-page">
      <div className="container-wrap">
        <a
          href="#"
          className="js-colorlib-nav-toggle colorlib-nav-toggle"
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
          <Work />
          <Blog />
          <Contact />
        </div>
      </div>
      {/* <Script type="text/javascript" src="/static/js/main.js" defer></Script> */}
    </div>
  );
}
