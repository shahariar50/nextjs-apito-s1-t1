import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BASE_API_URL } from "./config";

export const apolloPrivateInit = () => {
  const httpLink = createHttpLink({
    uri: BASE_API_URL,
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer 2QsDqzg7qGNZ7PHEokUY83XI2wjoakidEEgsFrg3x1P5vG4tvjUGgVNmdRG66DUMJr0igDsmawnJ0SdPdBSiEijswD8GiS00R8f3E654272BPTxTSc3FLP0j0mUa53e65A7gZqZLZQQzE2R8p26TNJJ2ULS8WbLH5kn7pSX1Fn`,
      },
    };
  });

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};
