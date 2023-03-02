import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="relative w-12 h-12">
      <Image src="/logo.svg" alt="NASA" className="object-cover" fill/>
    </Link>
  );
}
