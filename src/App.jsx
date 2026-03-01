import { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

import { catalog } from "./data/Catalog";
import "./App.css";

function App() {
  const [viewCatalog, setViewCatalog] = useState(catalog);

  return (
    <section>
      <Header />
      <Main catalog={viewCatalog} />
    </section>
  );
}

export default App;
