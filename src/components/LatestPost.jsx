import { getLatestPost } from "@/lib/posts";

import Post from "@/components/Post";

export default function LatestPost() {
  const post = getLatestPost();

  return (
    <section className="relative text-black flex flex-col w-full px-6 items-center align-middle bg-white">
      <h2 className="text-left text-2xl font-bold my-6">
        Latest from Our Blog
      </h2>
      <Post post={post} />
    </section>
  );
}
