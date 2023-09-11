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
        <div className="justify-between bg-white px-4 mx-auto md:items-center md:flex md:px-8 py-4">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.jpg"
                alt="AppJitsu, LLC"
                width={75}
                height={75}
                className="mr-4"
              />
              <span className="text-2xl font-bold text-black">AppJitsu</span>
            </Link>
            {/* <div className="md:hidden">
                    <button
                      className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                      onClick={() => setNavbar(!navbar)}
                    >
                      {navbar ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 text-black"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 text-black"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                          />
                        </svg>
                      )}
                    </button>
                  </div> */}
          </div>
          <div className="flex hidden md:block">
            <div className="flex">
              <a
                href="https://github.com/appjitsu"
                target="_blank"
                className="text-black hover:text-red-600 px-3 py-2 rounded-md text-2xl font-medium"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61551025772031"
                target="_blank"
                className="text-black hover:text-red-600 px-3 py-2 rounded-md text-2xl font-medium"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/appjitsullc/"
                target="_blank"
                className="text-black hover:text-red-600 px-3 py-2 rounded-md text-2xl font-medium"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/company/appjitsu"
                target="_blank"
                className="text-black hover:text-red-600 px-3 py-2 rounded-md text-2xl font-medium"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.pinterest.com/appjitsu/"
                target="_blank"
                className="text-black hover:text-red-600 px-3 py-2 rounded-md text-2xl font-medium"
              >
                <FaPinterest />
              </a>
              <a
                href="https://twitter.com/app_jitsu"
                target="_blank"
                className="text-black hover:text-red-600 px-3 py-2 rounded-md text-2xl font-medium"
              >
                <FaSquareXTwitter />
              </a>
            </div>
          </div>
          {/* <div>
                <div
                  className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                    navbar ? "block" : "hidden"
                  }`}
                >
                  <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                    <li className="text-black">
                      <a>Home</a>
                    </li>
                    <li className="text-black">
                      <a>Blogs</a>
                    </li>
                    <li className="text-black">
                      <a>About US</a>
                    </li>
                    <li className="text-black">
                      <a>Contact US</a>
                    </li>
                  </ul>
                </div>
              </div> */}
        </div>
      </nav>
      <div className="relative z-10 w-full flex bg-gray-300 shadow-md justify-end align-middle text-black p-2 pr-8">
        Located in Midland, TX. 432-260-7580
      </div>
    </header>
  );
}
