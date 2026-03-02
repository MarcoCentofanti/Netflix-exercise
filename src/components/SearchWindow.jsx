import emptyThubnail from "../assets/img/vettore-di-tipografia-di-stile-di-spazzatura-tratto-di-pennello-segno-punto-interrogativo_53876-140880.avif";

export default function SearchWindow({ findInCatalog }) {
  return (
      <section className="ms-3 mt-3">
        <div className="d-flex flex-wrap">
          {findInCatalog.map((element) => {
            return (
              <div key={element.id} className="me-3">
                <img
                  className="thubnail"
                  src={
                    element.thumbnailUrl !== ""
                      ? element.thumbnailUrl
                      : emptyThubnail
                  }
                  alt=""
                />
                <div key={element.id}>{element.title}</div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
