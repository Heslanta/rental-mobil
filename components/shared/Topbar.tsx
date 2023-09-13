import { SignIn, SignOutButton, SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { navbarLinks } from "@/constant";

function Topbar() {
  const isUserLoggedIn = true;

  return (
    <nav className="topbar bg-dark-1 flex  ">
      <div className="flex">
        <Link href="/a" className=" item-center">
          <p className="text-heading3-bold text-light-1 max-xs:hidden ml-15">
            E-Rental
          </p>
        </Link>
      </div>
      <div className="flex-1 px-3 hidden md:block">
        <div className="ml-10">
          {navbarLinks.map((link) => (
            <Link href={link.route} key={link.label} className="">
              <p className="text-light-1 font-semibold inline px-5">
                {link.label}
              </p>
            </Link>
          ))}

          {/* <ul className="">
            <a href="">
              <li>Home</li>
            </a>
            <a href="">
              <li>About</li>
            </a>
            <a href="">
              <li>Contact</li>
            </a>
          </ul> */}
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

        <div className="button-login hidden md:block">
          <button className=" border-solid border-2 border-white h-8 rounded-md hover:bg-white focus:outline-dashed focus:ring-gray-100 transition duration-500">
            <Link href="/sign-in">
              <p className="text-light-1 pt-0.5 px-5 font-semibold hover:text-dark-1  ">
                Login
              </p>
            </Link>
          </button>
        </div>
        <div className="button-signup hidden md:block">
          <button className="ml-3 mr-10 border-solid border-2 border-white h-8 rounded-md hover:bg-white focus:outline-dashed focus:ring-gray-100 transition duration-500">
            <Link href="/">
              <p className="text-light-1 pt-0.5 px-5 font-semibold hover:text-dark-1 ">
                Sign Up
              </p>
            </Link>
          </button>
        </div>
        <div className="hamburger-icon">
          <Image
            className="logout-icon block md:hidden"
            src="/assets/hamburger.svg"
            alt="logout"
            height={24}
            width={24}
          />
        </div>
      </div>
    </nav>
  );
}
export default Topbar;
