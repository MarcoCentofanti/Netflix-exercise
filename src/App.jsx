import { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import SearchWindow from "./components/SearchWindow";

// import { catalog } from "./data/Catalog";
import "./App.css";

function App() {
  const [viewCatalog, setViewCatalog] = useState(catalog);
  const [inputSearch, setinputSearch] = useState("");
  const [findInCatalog, setFindInCatalog] = useState([]);

  const handleSearch = (e) => {
    setinputSearch(e.target.value);
  };

  const handelFindInCatalog = () => {
    setFindInCatalog(
      viewCatalog.filter((element) => {
        return element.title.toLowerCase().includes(inputSearch.toLowerCase());
      }),
    );
  };

  useEffect(() => {
    handelFindInCatalog();
  }, [inputSearch]);

  return (
    <section>
      <Header handleSearch={handleSearch} inputSearch={inputSearch} />
      {inputSearch !== "" ? (
        <SearchWindow findInCatalog={findInCatalog} />
      ) : (
        <Main catalog={viewCatalog} />
      )}
    </section>
  );
}

export default App;
