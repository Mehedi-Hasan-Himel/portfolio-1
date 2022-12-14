import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import Image from "next/image";
import developer from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        {/* Nav Section Start */}
        <section className="sticky top-0 z-50 bg-white dark:bg-gray-900">
          <nav className=" mb-12 flex justify-between py-10 ">
            <h1 className=" font-burtons text-xl dark:text-white">
              Developer Portfolio
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => {
                    setDarkMode(!darkMode);
                  }}
                  className=" cursor-pointer text-2xl"
                ></BsFillMoonStarsFill>
              </li>
              <li>
                <a
                  className=" ml-8  rounded-md bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 text-white"
                  href=""
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </section>
        {/* Nav Section End */}

        {/* Profile Section Start */}
        <section className=" min-h-screen ">
          {/* Profile Text Start */}
          <div className="p-10 text-center">
            <h2 className=" text-4xl font-medium text-teal-600 md:text-6xl">
              Mehedi Hasan Himel
            </h2>
            <h3 className=" py-2 text-2xl dark:text-white md:text-3xl">
              Front-End Developer
            </h3>
            <p className=" text-md mx-auto max-w-lg py-5 leading-8 text-gray-500 md:text-xl ">
              Freelancer providing services for programming and design content
              needs. Join me below and let's get cracking !
            </p>
          </div>
          {/* Profile Text End  */}

          {/* Profile Social icons Start */}
          <div className="flex justify-center gap-16 py-3 text-5xl text-gray-600">
            <AiFillTwitterCircle></AiFillTwitterCircle>
            <AiFillLinkedin></AiFillLinkedin>
            <AiFillYoutube></AiFillYoutube>
          </div>
          {/* Profile Social icons End */}

          {/* Profile Image Start */}
          <div className="relative mx-auto mt-20 h-80 w-80  overflow-hidden rounded-full bg-gradient-to-b from-teal-500 md:h-96 md:w-96">
            <Image
              src={developer}
              alt="Developer Image"
              layout="fill"
              objectFit="cover"
            ></Image>
          </div>
          {/* Profile Image End */}
        </section>
        {/* Profile Section End */}

        {/* Service Section Start */}
        <section>
          {/* Service Description Start */}
          <div>
            <h3 className="mt-5 py-1 text-center text-3xl text-teal-600">
              Services I Offer
            </h3>
            <p className=" text-md loading-8 py-2 text-gray-500">
              Since the beginning the journey as a freelancer developer, I have
              done remote work for different clients and{" "}
              <span className="text-teal-500">agencies</span> consulted for{" "}
              <span className="text-teal-500">Startups</span> and collaborations
              with talented people to create digital products for both business
              and consumer users.
            </p>
            <p className="text-md loading-8 py-2 text-gray-500">
              I offer form a wide range of services, including Programming and
              Teaching.{" "}
            </p>
          </div>
          {/* Service Description End */}

          {/* Service Cards section start */}
          <div className="gap-10 lg:flex">
            <div className="my-10 rounded-xl p-10 text-center shadow-lg ">
              <Image
                className="inline-block"
                src={design}
                alt="design image."
                width={100}
                height={100}
              ></Image>
              <h3 className="pt-8 pb-2 text-lg font-medium dark:text-white">
                Beautiful Designs
              </h3>
              <p className="py-2 text-gray-500">
                Creating elegant designs suited for your needs design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use:</h4>
              <p className=" py-1 text-gray-500">Photoshop</p>
              <p className=" py-1 text-gray-500"> Adobe Illustrator</p>
              <p className=" py-1 text-gray-500">Figma</p>
            </div>
            <div className="my-10 rounded-xl p-10 text-center shadow-lg ">
              <Image
                className="inline-block"
                src={code}
                alt="design image."
                width={100}
                height={100}
              ></Image>
              <h3 className="pt-8 pb-2 text-lg font-medium dark:text-white">
                Beautiful Designs
              </h3>
              <p className="py-2 text-gray-500">
                Creating elegant designs suited for your needs design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use:</h4>
              <p className=" py-1 text-gray-500">Photoshop</p>
              <p className=" py-1 text-gray-500"> Adobe Illustrator</p>
              <p className=" py-1 text-gray-500">Figma</p>
            </div>
            <div className="my-10 rounded-xl p-10 text-center shadow-lg ">
              <Image
                className="inline-block"
                src={consulting}
                alt="design image."
                width={100}
                height={100}
              ></Image>
              <h3 className="pt-8 pb-2 text-lg font-medium dark:text-white">
                Beautiful Designs
              </h3>
              <p className="py-2 text-gray-500">
                Creating elegant designs suited for your needs design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use:</h4>
              <p className=" py-1 text-gray-500">Photoshop</p>
              <p className=" py-1 text-gray-500"> Adobe Illustrator</p>
              <p className=" py-1 text-gray-500">Figma</p>
            </div>
          </div>
          {/* Service Cards section end */}
        </section>
        {/* Service Section End */}

        {/* Portfolio Section Start */}
        <section>
          {/* Portfolio Description Start */}
          <div>
            <h3 className="py-1 text-3xl text-center text-teal-500">Portfolio</h3>
            <p className=" text-md loading-8 py-2 text-gray-500">
              Since the beginning the journey as a freelancer developer, I have
              done remote work for different clients and{" "}
              <span className="text-teal-500">agencies</span> consulted for{" "}
              <span className="text-teal-500">Startups</span> and collaborations
              with talented people to create digital products for both business
              and consumer users.
            </p>
            <p className="text-md loading-8 py-2 text-gray-500">
              I offer form a wide range of services, including Programming and
              Teaching.{" "}
            </p>
          </div>
          {/* Portfolio Description End */}

          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="flex-1 basis-1/3">
              {" "}
              <Image
                className="rounded-lg object-cover "
                width={100}
                height={100}
                layout="responsive"
                src={web1}
                alt="image"
              ></Image>{" "}
            </div>
            <div className="flex-1 basis-1/3">
              {" "}
              <Image
                className="rounded-lg object-cover "
                width={100}
                height={100}
                layout="responsive"
                src={web2}
                alt="image"
              ></Image>{" "}
            </div>
            <div className="flex-1 basis-1/3">
              {" "}
              <Image
                className="rounded-lg object-cover "
                width={100}
                height={100}
                layout="responsive"
                src={web3}
                alt="image"
              ></Image>{" "}
            </div>
            <div className="flex-1 basis-1/3">
              {" "}
              <Image
                className="rounded-lg object-cover "
                width={100}
                height={100}
                layout="responsive"
                src={web4}
                alt="image"
              ></Image>{" "}
            </div>
            <div className="flex-1 basis-1/3">
              {" "}
              <Image
                className="rounded-lg object-cover "
                width={100}
                height={100}
                layout="responsive"
                src={web5}
                alt="image"
              ></Image>{" "}
            </div>
            <div className="flex-1 basis-1/3">
              {" "}
              <Image
                className="rounded-lg object-cover "
                width={100}
                height={100}
                layout="responsive"
                src={web6}
                alt="image"
              ></Image>{" "}
            </div>
          </div>
        </section>
        {/* Portfolio Section End */}
      </main>
    </div>
  );
}
