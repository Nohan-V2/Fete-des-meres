function Component({ src, name, price, url }) {
  <li className="item-special-product">
    <a href={url}>
    <img src={src} alt={name} />
    <div className="description-special-product">
      <div className="text-special-product">
        <span className="name-special-product">{name}</span>
        <span className="price-special-product">{price}</span>
      </div>
    </div>
    </a>
  </li>
}

export default Component
