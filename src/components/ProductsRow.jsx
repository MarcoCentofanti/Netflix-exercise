import emptyThubnail from "../assets/img/vettore-di-tipografia-di-stile-di-spazzatura-tratto-di-pennello-segno-punto-interrogativo_53876-140880.avif";

export default function ProductRow({ catalog, topic, children }) {
  if (topic === "continue") {
    const filteredCatalog = catalog.filter((element) => {
      return (
        element.userProgress.watched === true &&
        element.userProgress.completed === false
      );
    });

    return (
      <section>
        {children}
        <div className="d-flex product-row__track">
          {filteredCatalog.map((element) => {
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
  } else {
    const filteredCatalog = catalog.filter((element) => {
      return element.genres.includes(topic);
    });

    return (
      <section>
        {children}
        <div className="d-flex product-row__track">
          {filteredCatalog.map((element) => {
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
}
