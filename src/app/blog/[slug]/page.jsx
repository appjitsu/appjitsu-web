import Link from "next/link";
import Image from "next/image";

import { getPostBySlug, getMetadata } from "@/lib/posts";
import SocialShare from "@/components/SocialShare";

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);
  const metaData = getMetadata(post);
  return {
    ...metaData,
    twitter: {
      card: "summary_large_image",
      title: post.data.title,
      description: post.data.excerpt,
      images: [post.data.photo],
    },
    openGraph: {
      url: `https://appjitsu.com/blog/${post.slug}`,
      title: post.data.title,
      description: post.data.excerpt,
      siteName: "AppJitsu",
      type: "article",
      article: {
        publishedTime: post.data.date,
      },
      images: [
        {
          url: post.data.photo,
          width: 800,
          height: 600,
          alt: post.data.title,
        },
      ],
    },
  };
}

export default async function Post({ params }) {
  const post = await getPostBySlug(params.slug);
  //   console.log("post detail", post);

  if (!post) {
    return <div>404</div>;
  }

  return (
    <div className="bg-white pt-44 p-10">
      <div className="mb-6">
        <Link className="text-red-600" href="/blog">
          Blog
        </Link>{" "}
        / {post.data.title}
      </div>
      <div className="relative h-80 w-full aspect-w-1 aspect-h-1 w-full rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8 mb-8">
        <Image
          src={`${post.data.photo}?auto=format&fit=crop&w=2100&q=80`}
          className="w-full object-cover lg:rounded mb-10"
          fill={true}
          alt={post.data.title}
        />
      </div>
      <div
        className="w-full prose prose-headings:text-black prose-a:text-red-600 prose-strong:text-black"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
      <SocialShare post={post} />
    </div>
  );
}
