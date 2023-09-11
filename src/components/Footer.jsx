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

import ContactForm from "@/components/ContactForm";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-gray-600 relative w-full items-center align-middle"
    >
      <div className="flex flex-wrap justify-center space-between">
        <div className="w-full md:w-1/2 p-4">
          <div className="px-4 py-6">
            <h2 className="text-center text-white text-2xl font-bold py-10">
              About the Owner - Jason Cochran
            </h2>
            <div className="flex flex-col sm:flex-row items-center align-middle">
              <Image
                src="/jason.jpg"
                alt="Jason Cochran - AppJitsu, LLC"
                width={200}
                height={200}
                className="grow-0 rounded-full mr-4 mb-4 shadow-lg border-4 border-white"
              />
              <p className="text-left text-white">
                With 30 years in the tech industry, Jason has been crafting web
                and mobile experiences since the dawn of the web. Committed to
                clean code and sleek design, he meets every deadline with the
                precision of a master craftsman. His open communication style
                makes him not just an experienced developer, but also a
                trustworthy partner for your project.
              </p>
            </div>
          </div>
        </div>
        <div className="flex block md:hidden py-4">
          <a
            href="https://github.com/appjitsu"
            target="_blank"
            className="text-white hover:text-red-600 px-3 py-2 rounded-md text-3xl font-medium"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61551025772031"
            target="_blank"
            className="text-white hover:text-red-600 px-3 py-2 rounded-md text-3xl font-medium"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/appjitsullc/"
            target="_blank"
            className="text-white hover:text-red-600 px-3 py-2 rounded-md text-3xl font-medium"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/company/appjitsu"
            target="_blank"
            className="text-white hover:text-red-600 px-3 py-2 rounded-md text-3xl font-medium"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.pinterest.com/appjitsu/"
            target="_blank"
            className="text-white hover:text-red-600 px-3 py-2 rounded-md text-3xl font-medium"
          >
            <FaPinterest />
          </a>
          <a
            href="https://twitter.com/app_jitsu"
            target="_blank"
            className="text-white hover:text-red-600 px-3 py-2 rounded-md text-3xl font-medium"
          >
            <FaSquareXTwitter />
          </a>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <ContactForm />
        </div>
      </div>
      <div className="relative w-full bg-white text-center">
        &copy; {new Date().getFullYear()} AppJitsu, LLC. All rights reserved.
      </div>
    </footer>
  );
}
