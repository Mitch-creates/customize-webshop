import Link from "next/link";
import CtaButton from "./cta-button";
import RegularButton from "./regular-button";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 border-b-2 select-none">
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
          <RegularButton>Sign in </RegularButton>
        </li>
        <li>
          <Link href="/account/signup">
            <CtaButton accent="color2">Sign up</CtaButton>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
