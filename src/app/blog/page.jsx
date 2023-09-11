import Post from "@/components/Post";

import { getAllPosts } from "@/lib/posts";

export default function Blog() {
  const posts = getAllPosts();

  return (
    <main className="bg-white pt-40 p-10">
      <h2 className="text-left text-2xl font-bold mb-4">
        Latest from Our Blog
      </h2>
      {posts.map((post) => (
        <Post key={post.slug} post={post} />
      ))}
    </main>
  );
}
