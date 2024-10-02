import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import GridBackground from "./components/ui/GridBackground";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  //  UPDATE THE URI ON PRODUCTION
  uri: "http://localhost:4000/qraphql", //The URL for our GraphQL server 
  cache: new InMemoryCache(), //Apollo Client uses to cache query results after fetching them 
  credentials:"include" // This tells Apollo Client to send cookies along with every request to the server
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <GridBackground>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </GridBackground>
    </BrowserRouter>
  </StrictMode>
);
