import Logo from "../assets/img/Netflix_2015_logo.svg.png";

export default function JumbotronCard() {
  return (
    <div className=" jumb-card ms-3 mb-5">
      <img className="jumb-card-logo" src={Logo} alt="" />
      <h2>STRANGER THINGS</h2>
      <p>
        Ambientata negli anni ottanta nella fittizia cittadina di Hawkins,
        nell'Indiana, misteriosi esperimenti governativi coinvolgono una bambina
        dai poteri soprannaturali e un'oscura dimensione parallela.
      </p>
      <section>
        <button className="btn btn-light me-3">▶ Riproduci</button>
        <button className="btn btn-secondary"> ⓘ Altre info</button>
      </section>
    </div>
  );
}
