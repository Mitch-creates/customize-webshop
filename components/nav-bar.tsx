import Link from "next/link";
import CtaButton from "./cta-button";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 border-b-2">
      <h1>
        <Link href="/">My Website</Link>
      </h1>
      <ul className="flex space-x-4">
        <li>
          <Link href="/Content">Content</Link>
        </li>
        <li>
          <Link href="/Dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/Settings">Settings</Link>
        </li>
      </ul>
      <ul className="flex space-x-4">
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <CtaButton>Register</CtaButton>
        </li>
      </ul>
    </nav>
  );
}
