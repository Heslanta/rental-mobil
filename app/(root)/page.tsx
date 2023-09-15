import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

// Home Page atau General Structure
export default function Home() {
  return (
    <div>
      <div className="flex flex-col md:flex-row">
        <div className="w-2/4 pl-20 max-lg:pl-5 max-lg:w-full">
          <UserButton afterSignOutUrl="/" />
          <h2 className="head-text text-slate-100 text-left pt-20 py-4 flex-1 mt-20 md:mt-0 max-md:pt-0 ">
            Sewa dan Rental Mobil Terbaik di kawasan &#40;Lokasimu&#41;
          </h2>
          <p className="flex-1 flex-row text-slate-200 w-3/4 font-medium ">
            Selamat datang di E-Rental. Kami menyediakan mobil kualitas terbaik
            dengan harga terjangkau. Selalu siap melayani kebutuhan anda untuk
            sewa mobil 24 jam
          </p>

          <div className="flex pt-3 text-white">
            <Link
              href="/car"
              className="cta w-50 h-15 flex py-2 px-7 border-solid border-2 border-white transition duration-100 shadow-cta hover:transition hover:duration-500 hover:shadow-white"
            >
              <span className="text-4xl font-bold ">Mulai Sewa</span>
              <span>
                <svg
                  width="40px"
                  height="20px"
                  viewBox="0 0 66 43"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <g
                    id="arrow"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <path
                      className="one"
                      d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      className="two"
                      d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      className="three"
                      d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                      fill="#FFFFFF"
                    ></path>
                  </g>
                </svg>
              </span>
            </Link>
          </div>
          {/* <div className="button-action pt-3">
          <button className=" border-solid border-2 border-white h-8 rounded-md hover:bg-white focus:outline-dashed focus:ring-gray-100 transition duration-500">
            <Link href="/sign-in">
              <p className="text-light-1 px-5 font-semibold hover:text-dark-1 pt-0.5   ">
                Login
              </p>
            </Link>
          </button>
        </div> */}
        </div>
        <Image
          src="/assets/rentalcar.png"
          alt="Car-Rental"
          width={500}
          height={500}
          className="float-right r-0 flex-1 p-0 w-10 h-25 max-lg:hidden max-md:w-1/2 max-md:h-1/2"
        />
      </div>
      <div className="h-24"></div>
    </div>
  );
}
