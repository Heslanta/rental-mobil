import Image from "next/image";

function About() {
  return (
    <div className=" bg-dark-1 ">
      <div className="text-slate-200 p-0">
        <div className="cards  flex flex-wrap justify-between px-16 ">
          <div className=" w-80 about-card bg-dark-1 border  rounded-lg shadow border-white border-1 border-solid">
            <div className="p-3">
              <div className=" border-solid border-2 border-white rounded-full w-10 h-10 my-4 ml-2">
                <Image
                  src="/assets/like.svg"
                  alt=""
                  width={22}
                  height={22}
                  className="about-icon ml-2 py-2 pl-0 "
                />
              </div>

              <h5 className="mb-2 ml-3 text-2xl font-bold tracking-tight dark:text-white ">
                Mobil Lengkap
              </h5>
              <p className="font-normal mb-3 text-left ml-3">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </div>
          <div className=" w-80 about-card bg-dark-1 border  rounded-lg shadow border-white border-1 border-solid">
            <div className="p-3">
              <div className=" border-solid border-2 border-white rounded-full w-10 h-10 my-4 ml-2">
                <Image
                  src="/assets/like.svg"
                  alt=""
                  width={22}
                  height={22}
                  className="about-icon ml-2 py-2 pl-0 "
                />
              </div>

              <h5 className="mb-2 ml-3 text-2xl font-bold tracking-tight dark:text-white ">
                Mobil Lengkap
              </h5>
              <p className="font-normal mb-3 text-left ml-3">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </div>
          <div className=" w-80 about-card bg-dark-1 border  rounded-lg shadow border-white border-1 border-solid">
            <div className="p-3">
              <div className=" border-solid border-2 border-white rounded-full w-10 h-10 my-4 ml-2">
                <Image
                  src="/assets/like.svg"
                  alt=""
                  width={22}
                  height={22}
                  className="about-icon ml-2 py-2 pl-0 "
                />
              </div>

              <h5 className="mb-2 ml-3 text-2xl font-bold tracking-tight dark:text-white ">
                Mobil Lengkap
              </h5>
              <p className="font-normal mb-3 text-left ml-3">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </div>
          <div className=" w-80 about-card bg-dark-1 border  rounded-lg shadow border-white border-1 border-solid">
            <div className="p-3">
              <div className=" border-solid border-2 border-white rounded-full w-10 h-10 my-4 ml-2">
                <Image
                  src="/assets/like.svg"
                  alt=""
                  width={22}
                  height={22}
                  className="about-icon ml-2 py-2 pl-0 "
                />
              </div>

              <h5 className="mb-2 ml-3 text-2xl font-bold tracking-tight dark:text-white ">
                Mobil Lengkap
              </h5>
              <p className="font-normal mb-3 text-left ml-3">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
