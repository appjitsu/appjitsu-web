export default function Hero() {
  return (
    <div
      className="flex h-full bg-white bg-cover bg-center bg-no-repeat p-10 mt-20"
      style={{ backgroundImage: "url('https://appjitsu.net/dark-splash.jpg')" }}
    >
      <div className="flex absolute min-h-screen h-full inset-0"></div>
      <div className="relative z-10 md:flex mx-10">
        <div className="md:w-1/2">
          <div className="text-left text-white text-6xl font-bold mb-10 mt-12">
            We Build Web and Mobile Apps
          </div>
          <div className="text-left text-white mb-10 font-bold">
            At our agency, we bring over 30 years of full-stack expertise to
            create web and mobile apps that are as stunning as they are
            functional. We deliver quality apps that are robust and easy to use.
            We are committed to transforming your web-based vision into a seamless,
            high-performing reality. Let&apos;s chat today to kickstart your
            project.
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
  );
}
