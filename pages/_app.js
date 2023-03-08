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

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: "https://api.apito.io/secured/graphql",
    cache: new InMemoryCache(),
    headers: {
      authorization:
        "2QsDqzg7qGNZ7PHEokUY83XI2wjoakidEEgsFrg3x1P5vG4tvjUGgVNmdRG66DUMJr0igDsmawnJ0SdPdBSiEijswD8GiS00R8f3E654272BPTxTSc3FLP0j0mUa53e65A7gZqZLZQQzE2R8p26TNJJ2ULS8WbLH5kn7pSX1Fn",
    },
  });

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

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
