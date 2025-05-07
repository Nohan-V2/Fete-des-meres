function Component({ src, name, price, url }) {
  return (
  <li className="item-special-product">
    <a href={url}>
    <img src={src} alt={name} />
    <div className="description-special-product">
      <div className="text-special-product">
        <span className="name-special-product">{name}</span>
        <span className="price-special-product">{price}</span>
      </div>
      <img src="/shop.svg" alt="shop" />
    </div>
    </a>
  </li>
  )
}

export default Component
