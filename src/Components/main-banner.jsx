const itemsBanner = [
  {
    content : "un beau bouquet",
    src : "/bouquet.svg"
  },
  {
    content : "un beau bouquet",
    src : "/bouquet.svg"
  },
  {
    content : "un beau bouquet",
    src : "/bouquet.svg"
  },
  {
    content : "un beau bouquet",
    src : "/bouquet.svg"
  },
  {
    content : "un beau bouquet",
    src : "/bouquet.svg"
  }
]

function Component() {
  return (
    <section className="main-banner">
    <ul className="list-banner">
      {
        itemsBanner.map(item => (
          <li className="item-banner" key={item.content}>
            <img src={item.src} alt={item.content} />
            <p>{item.content}</p>
          </li>
        ))
      }
    </ul>
  </section>
  )
}

export default Component
