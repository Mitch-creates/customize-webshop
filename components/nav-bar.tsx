import Link from "next/link";
import CtaButton from "./cta-button";
import RegularButton from "./regular-button";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const navigationMessages = useTranslations("navigation");
  return (
    <nav className="flex justify-between items-center p-4 border-b-2 select-none">
      <h1>
        <Link href="/">Logo Website</Link>
      </h1>
      <ul className="flex space-x-4">
        <li>
          <Link href="/Content">{navigationMessages("news")}</Link>
        </li>
        <li>
          <Link href="/Dashboard">{navigationMessages("about")}</Link>
        </li>
      </ul>
      <ul className="flex space-x-4">
        <li>
          <RegularButton>{navigationMessages("signIn")}</RegularButton>
        </li>
        <li>
          <Link href="/account/signup">
            <CtaButton accent="color2">
              {navigationMessages("signUp")}
            </CtaButton>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
