import { SignIn, SignOutButton, SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

function Topbar() {
  //   const isUserLoggedIn = true;

  return (
    <nav className="topbar bg-dark-1 flex">
      <div className="flex-auto w-12">
        <Link href="/" className="flex item-center gap-3">
          <p className="text-heading3-bold text-light-1 max-xs:hidden pl-12">
            E-Rental
          </p>
        </Link>
      </div>
      <div className="flex-auto w-64">
        <div className="text-light-1 font-semibold ">
          <ul className="py-1">
            <a href="">
              <li>Home</li>
            </a>
            <a href="">
              <li>About</li>
            </a>
            <a href="">
              <li>Contact</li>
            </a>
          </ul>
        </div>
      </div>

      <div className="flex items-center gap-1 ">
        <div className="block md:hidden">
          <SignedIn>
            <SignOutButton>
              <div className="flex cursor-pointer">
                <Image
                  className="logout-icon"
                  src="/assets/logout.svg"
                  alt="logout"
                  height={24}
                  width={24}
                />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>
        <div className="button-login">
          <button className=" border-solid border-2 border-white h-8 rounded-md">
            <Link href="/sign-in">
              <p className="text-light-1 px-5 font-semibold">Login</p>
            </Link>
          </button>
        </div>
      </div>
    </nav>
  );
}
export default Topbar;
