"use client";
import Link from "next/link";
import CtaButton from "./cta-button";
import RegularButton from "./regular-button";
import { useTranslations } from "next-intl";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default function Navbar() {
  const navigationMessages = useTranslations("navigation");
  const session = authClient.useSession();
  const router = useRouter();

  const user = session.data?.user;

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
      {user && !session.isPending ? (
        <DropdownMenu>
          <DropdownMenuTrigger>Open</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => {
                authClient.signOut({
                  fetchOptions: {
                    onSuccess: () => {
                      router.push("/");
                    },
                  },
                });
              }}
            >
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <ul className="flex space-x-4">
          <li>
            <Link href="/account/signin">
              <RegularButton>{navigationMessages("signIn")}</RegularButton>
            </Link>
          </li>
          <li>
            <Link href="/account/signup">
              <CtaButton accent="color2">
                {navigationMessages("signUp")}
              </CtaButton>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
