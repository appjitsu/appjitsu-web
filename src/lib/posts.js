import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = join(process.cwd(), "posts");

function getPostData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    return { slug, ...matterResult };
  });
  return allPostsData.sort((post1, post2) =>
    new Date(post1.date) - new Date(post2.date)
  );
}

export function getAllPosts() {
  return getPostData();
}

export function getLatestPost() {
  const posts = getAllPosts();
  return posts[0] || null;
}

export async function getPostBySlug(slug) {
  const posts = getAllPosts();
  const post = posts.find((post) => post.slug === slug);

  const processedContent = await remark()
    .use(html)
    .process(post.content || "");
  const processedHTML = processedContent.toString();
  return { ...post, html: processedHTML };
}

export function getMetadata(post) {
  // console.log("getMetadata", post);
  if (!post)
    return {
      title: "Not Found",
    };

  const title = post.data.title;
  const description = post.data.excerpt;
  const image = post.data.photo;
  const url = `https://www.example.com/blog/${post.slug}`;
  const date = post.data.date;

  return {
    title,
    description,
    image,
    url,
    date,
  };
}
