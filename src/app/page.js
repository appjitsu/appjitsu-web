"use client";

import Image from "next/image";
import { useState } from "react";

import {
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaSquareXTwitter,
} from "react-icons/fa6";

export default function Home() {
  const [navbar, setNavbar] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }

    const res = await fetch("/api/send-mail", {
      method: "POST",
      body: JSON.stringify({ name, email, message }),
    });
    if (res.status === 200) {
      alert(
        "Thank you for your reaching out to us! We will get back to you as soon as possible."
      );
    } else {
      alert("There was an error sending your message. Please try again later.");
    }
  };
  return (
    <div className="min-h-screen overflow-hidden">
      <div className="h-full mx-auto">
        <header className="z-20 bg-white fixed top-0 w-full">
          <nav className="relative z-20 bg-white shadow-md">
            <div className="justify-between bg-white px-4 mx-auto md:items-center md:flex md:px-8 py-4">
              <div className="flex">
                <a href="#" className="flex items-center">
                  <Image
                    src="/logo.jpg"
                    alt="AppJitsu, LLC"
                    width={75}
                    height={75}
                    className="mr-4"
                  />
                  <span className="text-2xl font-bold text-black">
                    AppJitsu
                  </span>
                </a>
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
          <div className="relative z-10 w-full flex bg-gray-300 justify-end align-middle text-black p-2 pr-8">
            Located in Midland, TX. 432-260-7580
          </div>
        </header>
        <div
          className="flex h-full bg-white bg-cover bg-center bg-no-repeat p-10 mt-20"
          style={{ backgroundImage: "url('background.jpg')" }}
        >
          <div className="flex absolute min-h-screen h-full inset-0"></div>
          <div className="relative z-10 md:flex mx-10">
            <div className="md:w-1/2">
              <div className="text-left text-white text-6xl font-bold mb-10 mt-8">
                We Build Web and Mobile Apps
              </div>
              <div className="text-left text-white mb-10 font-bold">
                At our agency, we bring over 30 years of full-stack expertise to
                create web and mobile apps that are as stunning as they are
                functional. Specializing in front-end technologies like
                JavaScript, TypeScript, React, and Next.js, and backed by a
                robust server-side stack including Node.js, Express, GraphQL,
                and PostgreSQL, we deliver custom-built solutions tailored to
                your unique needs. Quality is our game, deadlines are our
                promises, and we&apos;re committed to transforming your
                web-based vision into a seamless, high-performing reality.
                Let&apos;s chat today to kickstart your project.
              </div>
              <a
                href="#contact"
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
        <section className="relative text-black flex flex-col w-full py-10 items-center align-middle bg-white">
          <h2 className="text-left text-2xl font-bold mb-4">Our Services</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-gray-100 shadow-lg rounded-lg px-4 py-6">
                <div
                  style={{ position: "relative", width: "100%", height: 300 }}
                  className="aspect-w-1 aspect-h-1 w-full rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8 mb-4"
                >
                  <Image
                    src="/web-development.jpg"
                    alt="Web Development"
                    fill={true}
                    style={{ objectFit: "cover" }}
                    className="rounded"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl mb-2 font-bold">Web Development</h3>
                  <p className="text-gray-700 text-sm">
                    Our web development service focuses on creating intuitive
                    user experiences that drive engagement and conversions. From
                    e-commerce platforms to content-rich blogs, we build
                    solutions that scale with your business. With a commitment
                    to meeting deadlines and open communication, your project is
                    in reliable hands.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-gray-100 shadow-lg rounded-lg px-4 py-6">
                <div
                  style={{ position: "relative", width: "100%", height: 300 }}
                  className="aspect-w-1 aspect-h-1 w-full rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8 mb-4"
                >
                  <Image
                    src="/mobile-development.jpg"
                    alt="Mobile Development"
                    fill={true}
                    style={{ objectFit: "cover" }}
                    className="rounded"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl mb-2 font-bold">Mobile Development</h3>
                  <p className="text-gray-700 text-sm">
                    We excel in crafting mobile apps that feel native to both
                    iOS and Android, thanks to our expertise in React Native.
                    From gaming apps to business solutions, we ensure your
                    mobile presence is fast, secure, and user-friendly.
                    Let&apos;s talk today about elevating your mobile strategy
                    to the next level.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-gray-100 shadow-lg rounded-lg px-4 py-6">
                <div
                  style={{ position: "relative", width: "100%", height: 300 }}
                  className="aspect-w-1 aspect-h-1 w-full rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8 mb-4"
                >
                  <Image
                    src="/ecommerce.jpg"
                    alt="UI/UX Design"
                    fill={true}
                    style={{ objectFit: "cover" }}
                    className="rounded"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl mb-2 font-bold">E-Commerce</h3>
                  <p className="text-gray-700 text-sm">
                    We specialize in building e-commerce platforms that drive
                    conversions, incorporating Stripe for seamless subscription
                    management. With a secure, scalable, and user-friendly
                    design, our online stores elevate your brand while boosting
                    sales. Let&apos;s chat today to elevate your e-commerce
                    strategy to the next level.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white pt-2 pb-10 px-6">
          <h2 className="text-black text-center text-2xl font-bold mb-4 mt-6">
            Experts on the Latest Technologies
          </h2>
          <Image
            src="/logos.png"
            alt="html5, css3, javascript, typescript, react.js, next.js, node.js, postgresql, mongodb, graphql, json, mysql, git, github"
            width={1000}
            height={200}
            className="mx-auto"
          />
        </section>
        <section
          id="contact"
          className="relative w-full mb-20 items-center align-middle"
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
                    With 30 years in the tech industry, Jason has been crafting
                    web and mobile experiences since the dawn of the web.
                    Committed to clean code and sleek design, he meets every
                    deadline with the precision of a master craftsman. His open
                    communication style makes him not just an experienced
                    developer, but also a trustworthy partner for your project.
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
              <div className="px-4 py-6">
                <h2 className="text-center text-white text-2xl font-bold py-10">
                  Contact Us
                </h2>
                <form
                  className="bg-cream-100 shadow-md rounded"
                  onSubmit={handleFormSubmit}
                >
                  <div className="mb-4">
                    <input
                      className="bg-white shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      className="bg-white shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      placeholder="Your email"
                    />
                  </div>
                  <div className="mb-6">
                    <textarea
                      className="bg-white shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                      id="message"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <div className="">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline float-right"
                      type="submit"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <footer className="relative w-full bg-white text-center">
          <p>
            &copy; {new Date().getFullYear()} AppJitsu, LLC. All rights
            reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
