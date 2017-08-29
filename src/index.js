import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './App.css';
import 'normalize.css';
import { GRAPHQL_ENDPOINT } from './constants';
import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface,
} from 'react-apollo';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: GRAPHQL_ENDPOINT }),
});

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
