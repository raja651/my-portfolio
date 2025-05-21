import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="portfolio-header">
      <div className="portfolio-header-logo">
        <Link href="/">
          <Image
            src="/portfolio.png"
            alt="Portfolio Logo"
            width={45}
            height={45}
            priority
            className="logo-image"
          />
        </Link>
      </div>
      <nav className="portfolio-header-right">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
