import React from "react";
import { SearchField } from "./components/search-field";
import { Layout } from "./components/layout";
import { Movies } from "./components/movies";
import "./App.scss";

function App() {
  console.log(process.env.REACT_APP_OMDB_API_KEY);

  return (
    <div className="App">
      <h1> Search Movies App</h1>
      <Layout>
        <SearchField />
        <Movies />
      </Layout>
    </div>
  );
}
export default App;
