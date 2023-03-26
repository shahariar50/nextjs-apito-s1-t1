import "bootstrap/dist/css/bootstrap.min.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useEffect } from "react";
import { Events } from "react-scroll";
import "swiper/css";
import "swiper/scss/pagination";
import "../styles/animate.css";
import "../styles/bootstrap.css";
import "../styles/flexslider.css";
import "../styles/icomoon.css";
import "../styles/scss/style.scss";

import { ApolloProvider } from "@apollo/client";
import { AppProps } from "next/app";
import { apolloPrivateInit } from "../utils/apollo-private";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Events.scrollEvent.register("begin", function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function () {
      console.log("end", arguments);
    });

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  });

  const client = apolloPrivateInit();

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
