import Image from "next/image";

export default function Services() {
  return (
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
                Our web development service focuses on creating intuitive user
                experiences that drive engagement and conversions. From
                e-commerce platforms to content-rich blogs, we build solutions
                that scale with your business. With a commitment to meeting
                deadlines and open communication, your project is in reliable
                hands.
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
                We excel in crafting mobile apps that feel native to both iOS
                and Android, thanks to our expertise in React Native. From
                gaming apps to business solutions, we ensure your mobile
                presence is fast, secure, and user-friendly. Let&apos;s talk
                today about elevating your mobile strategy to the next level.
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
                management. With a secure, scalable, and user-friendly design,
                our online stores elevate your brand while boosting sales.
                Let&apos;s chat today to elevate your e-commerce strategy to the
                next level.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
