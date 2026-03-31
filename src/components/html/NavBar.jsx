export function NavBar() {
  const scrollTo = (sectionIndex) => {
    window.scrollTo({ top: sectionIndex * window.innerHeight, behavior: 'smooth' })
  }

  return (
    <nav className="bau-nav">
      <span className="bau-nav__logo" onClick={() => scrollTo(0)}>VK</span>
      <div className="bau-nav__links">
        <button className="bau-nav__link" onClick={() => scrollTo(1)}>ABOUT</button>
        <button className="bau-nav__link" onClick={() => scrollTo(2)}>PROJECTS</button>
      </div>
    </nav>
  )
}
