import Image from "next/image";
import Link from "next/link";

import {
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaSquareXTwitter,
} from "react-icons/fa6";

export default function Nav() {
  return (
    <header className="z-20 bg-white fixed top-0 w-full">
      <nav className="relative z-20 bg-white shadow-md">
        <div className="flex justify-between bg-white px-4 mx-auto md:items-center md:px-8 py-4">
          <div className="flex">
            <Link href="/" className="flex items-center mr-10">
              <Image
                src="/logo.jpg"
                alt="AppJitsu, LLC"
                width={75}
                height={75}
                className="mr-4"
              />
              <span className="text-2xl font-bold text-black">AppJitsu</span>
            </Link>
          </div>
          <ul className="flex space-x-4 items-center">
            <li className="text-black">
              <Link href="/">Home</Link>
            </li>
            <li className="text-black">
              <Link href="/blog">Blog</Link>
            </li>
            {/* <li className="text-black">
              <Link href="/projects">Projects</Link>
            </li> */}
          </ul>
          <div className="flex hidden md:block">
            <div className="flex">
              <a
                href="https://github.com/appjitsu"
                target="_blank"
                className="text-black hover:text-red-600 px-2 py-2 rounded-md text-xl font-medium"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61551025772031"
                target="_blank"
                className="text-black hover:text-red-600 px-2 py-2 rounded-md text-xl font-medium"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/appjitsullc/"
                target="_blank"
                className="text-black hover:text-red-600 px-2 py-2 rounded-md text-xl font-medium"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/company/appjitsu"
                target="_blank"
                className="text-black hover:text-red-600 px-2 py-2 rounded-md text-xl font-medium"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.pinterest.com/appjitsu/"
                target="_blank"
                className="text-black hover:text-red-600 px-2 py-2 rounded-md text-xl font-medium"
              >
                <FaPinterest />
              </a>
              <a
                href="https://twitter.com/app_jitsu"
                target="_blank"
                className="text-black hover:text-red-600 px-2 py-2 rounded-md text-xl font-medium"
              >
                <FaSquareXTwitter />
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="relative z-10 w-full flex bg-gray-300 shadow-md justify-end align-middle text-black p-2 pr-4">
        Located in Midland, TX. 432-260-7580
      </div>
    </header>
  );
}
