import Link from "next/link";
import CtaButton from "./cta-button";
import RegularButton from "./regular-button";
import { Dictionary } from "@/app/[lang]/dictionaries";

interface NavbarProps {
  dict: Dictionary;
}

export default function Navbar({ dict }: NavbarProps) {
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
          <RegularButton>{dict.onboarding.signIn}</RegularButton>
        </li>
        <li>
          <Link href="/account/signup">
            <CtaButton accent="color2">{dict.onboarding.signUp}</CtaButton>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
