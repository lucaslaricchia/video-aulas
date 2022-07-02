import { Router } from "./Router"
import { client } from './lib/apollo';
import { ApolloProvider } from "@apollo/client";
function App() {
  return (
    <ApolloProvider client={client}>
      <Router/>
    </ApolloProvider>
  )
}

export default App
