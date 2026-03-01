import jumbotronImg from "../assets/img/strangerThingsPresentation.jpg";
import JumbotronCard from "./JumbotronCard";

export default function Jumbotron() {
  return (
    <div
      className="jumbotronImg"
      style={{ backgroundImage: `url(${jumbotronImg})` }}
    >
      <JumbotronCard />
    </div>
  );
}
