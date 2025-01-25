import Link from "next/link";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container">
        <a className="logo">Personal Portfolio</a>
        <nav className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/About">About</Link>
          <Link href="/Contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
