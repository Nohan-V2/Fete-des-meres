const links = [
  {
    content : "Home",
    href : "#"
  },
  {
    content : "Shop",
    href : "#"
  },
  {
    content : "Sales",
    href : "#"
  },
  {
    content : "About",
    href : "#"
  },
  {
    content : "Contact",
    href : "#"
  },
]

const buttons = [
  {
    content : "Sign In"
  },
  {
    content : "Shop now"
  },
]

function Page() {
  return (
    <>
    <header className="header-container">
      <nav className="header-nav">
        <img className="logo" src="./src/assets/logo.png" alt="Logo" />

        <ul className="link-wrapper">
          {
            links.map(link => (
              <li key={link.content}>
                <a className="item-nav" href={link.href}>{link.content}</a>
              </li>
            ))
          }
        </ul>
      </nav>

      <div className="btn-wrapper">
        {
          buttons.map(btn => (
            <button className="header-cta">{btn.content}</button>
          ))
        }
      </div>
    </header>
    </>
  )
}

export default Page