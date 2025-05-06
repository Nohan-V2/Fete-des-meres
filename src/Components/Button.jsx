function Component({ label, url, kind }) {
  if (kind === "primary") {
    return <a className="button-primary" href={url}>{label}</a>
  }

  return <a className="button-secondary" href={url}>{label}</a>
}

export default Component
