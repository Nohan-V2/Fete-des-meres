import logo from "/Logo.png"
import Button from "./Button"

const links = [
  {
    content: "Home",
    href: "#",
  },
  {
    content: "Shop",
    href: "#",
  },
  {
    content: "Sales",
    href: "#",
  },
  {
    content: "About",
    href: "#",
  },
  {
    content: "Contact",
    href: "#",
  },
];

function Component() {
  return (
    <header className="main-header">
    <img src={logo} alt="Logo de Fêtes des fleurs" />
    <nav className="main-nav">
      <ul>
        {links.map((link) => (
          <li key={link.content}>
            <a href={link.href}>{link.content}</a>
          </li>
        ))}
      </ul>
      <div className="buttons-wrapper">
        <Button label="se connecter" url="#" kind="primary" />
        <Button label="S'inscrire" url="#" kind="secondary" />
      </div>
    </nav>
  </header>
  )
}

export default Component
