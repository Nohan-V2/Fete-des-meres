import ProductCard from "./ProductCard"

const products = [
  {
    id : 1,
    src : "/fleur-3.png",
    name : "pot de fleur",
    price : "20$",
    url : "#"
  },
  {
    id : 2,
    src : "/fleur-4.png",
    name : "pot de fleur",
    price : "20$",
    url : "#"
  },
  {
    id : 3,
    src : "/fleur-5.png",
    name : "pot de fleur",
    price : "20$",
    url : "#"
  }
]

function Component() {
  return (
    <section className="present-product-container">
      <div className="present-product-text">
        <h2>Special fêtes des Mères</h2>
        <a href="#">Voir plus</a>
      </div>
      <ul className="product-wrapper">
        {
          products.map(product => (
            <ProductCard
            key={product.id}
            src={product.src}
            name={product.name}
            price={product.price}
            url={product.url}
            />
          ))
        }
      </ul>
    </section>
  )
}

export default Component
