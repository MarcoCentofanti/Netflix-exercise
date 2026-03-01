import emptyThubnail from "../assets/img/vettore-di-tipografia-di-stile-di-spazzatura-tratto-di-pennello-segno-punto-interrogativo_53876-140880.avif";

export default function ProductRow({ catalog, topic, children }) {
  return (
    <section>
      {children}
      <div className="d-flex">
        {catalog.map((element) => {
          return (
            <div key={element.id} className="me-1">
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
