import Link from "next/link";

export default function Post({ post }) {
  return (
    <article className="mb-6 p-6 bg-white text-black rounded-lg border border-gray-200 shadow-md dark:bg-gray-100 dark:border-gray-100">
      <div className="flex justify-between items-center mb-5">
        <span className="text-sm">{post.data.date}</span>
      </div>
      <h2 className="mb-2 text-2xl font-bold tracking-tight">
        <Link href={`/blog/${post.slug}`}>{post.data.title}</Link>
      </h2>
      <p className="mb-5">{post.data.excerpt}</p>
      <div className="flex justify-between items-center">
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
        >
          Read more
          <svg
            className="ml-2 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </Link>
      </div>
    </article>
  );
}
