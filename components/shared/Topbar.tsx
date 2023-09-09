import Image from "next/image";
import Link from "next/link";

function Topbar() {
  return (
    <nav className="topbar">
      <Link href="/" className="flex item-center gap-3">
        <Image src="/logo.svg" alt="logo" height={28} width={28} />
        <p className="text-heading3-bold text-light-1 max-xs:hidden ">
          E-Rental
        </p>
      </Link>
    </nav>
  );
}
export default Topbar;
