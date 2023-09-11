import Image from "next/image";

export default function StackLogos() {
  return (
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
  );
}
