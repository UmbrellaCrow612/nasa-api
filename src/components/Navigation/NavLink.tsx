import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

export default function NavLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const { asPath } = useRouter();
  return (
    <Link href={href} className={`btn ${asPath === href ? "btn-outline btn-primary" : "btn-ghost"}`}>
      {children}
    </Link>
  );
}
