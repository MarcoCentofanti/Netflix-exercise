import ProductRow from "./ProductsRow";

export default function Main({ catalog }) {
  return (
    <div className="ms-3 mt-3">
      <ProductRow catalog={catalog} topic="continue">
        <h1>Continua a guardare</h1>
      </ProductRow>
      <ProductRow catalog={catalog} topic="Dramma">
        <h1>Drammi</h1>
      </ProductRow>
      <ProductRow catalog={catalog} topic="Commedia">
        <h1>Commedia</h1>
      </ProductRow>
      <ProductRow catalog={catalog} topic="Fantascienza">
        <h1>Fantascienza</h1>
      </ProductRow>
    </div>
  );
}
