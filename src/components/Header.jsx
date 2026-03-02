import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";

const uiDataNav = [
  {
    name: "Home",
    link: "#",
  },
  {
    name: "Serie",
    link: "#",
  },
  {
    name: "Film",
    link: "#",
  },
  {
    name: "Giochi",
    link: "#",
  },
  {
    name: "Nuovi e popolari",
    link: "#",
  },
  {
    name: "La mia lista",
    link: "#",
  },
  {
    name: "Sfoglia per lingua",
    link: "#",
  },
];

export default function Header({ handleSearch, searchFunction, inputSearch }) {
  return (
    <section className="">
      <Navbar
        uiData={uiDataNav}
        handleSearch={handleSearch}
        inputSearch={inputSearch}
      />
      {inputSearch !== ""? <h3 className="ms-3 mt-3">Cerca nel nostro catalogo</h3> :
      <Jumbotron />}
    </section>
  );
}
