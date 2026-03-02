import facebook from "../assets/img/footer-facebook.png";
import twitter from "../assets/img/footer-twitter.png";
import youtube from "../assets/img/footer-youtube.png";

export default function Footer() {
  const uiDataFoot = [
    {
      name: "Audiodescrizione",
      link: "#",
    },
    {
      name: "Rapporti con gli investitori",
      link: "#",
    },
    {
      name: "Note legali",
      link: "#",
    },
    {
      name: "Preferenze per la pubblicità",
      link: "#",
    },
    {
      name: "Centro assistenza",
      link: "#",
    },
    {
      name: "Opportunità di lavoro",
      link: "#",
    },
    {
      name: "Preferenze per i cookie",
      link: "#",
    },
    {
      name: "Carte regalo",
      link: "#",
    },
    {
      name: "Condizioni di utilizzo",
      link: "#",
    },
    {
      name: "Informazioni sull'azienda",
      link: "#",
    },
    {
      name: "Media Center",
      link: "#",
    },
    {
      name: "Privacy",
      link: "#",
    },
    {
      name: "Contattaci",
      link: "#",
    },
  ];

  return (
    <>
      <div className="footer  justify-content-start">
        <section className="social ">
          <img className="me-3" src={facebook} alt="" />
          <img className="me-3" src={twitter} alt="" />
          <img className="me-3" src={youtube} alt="" />
        </section>
        <section className="">
          <ul className="d-flex flex-column flex-wrap linkUtili footer">
            {uiDataFoot.map((element, index) => {
              return (
                <li key={index} className="mt-2 ">
                  <a className="footerLinks" href={element.link}>
                    {element.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
        <section className="watermarket">© 1997-2026 Netflix, Inc</section>
      </div>
    </>
  );
}
