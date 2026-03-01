import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";

const uiData = [
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

export default function Header() {
  return (
    <section className="">
      <Navbar uiData={uiData} />
      <Jumbotron />
    </section>
  );
}
