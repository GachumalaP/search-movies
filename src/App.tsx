import React from 'react';
import { SearchField } from "./modules/search-field";
import { Layout } from "./modules/layout";
import { Movies } from "./modules/movies";
import './App.css';

function App() {

  console.log(process.env.REACT_APP_OMDB_API_KEY);
  
  return (
    <div className="App">
      Search Movies App
      <Layout>
        <SearchField />
        <Movies />
      </Layout>
    </div>
  );
}

export default App;
