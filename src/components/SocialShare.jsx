import {
  FaFacebook,
  FaLinkedin,
  FaPinterest,
  FaSquareXTwitter,
  FaEnvelope,
} from "react-icons/fa6";

export default function SocialShare({ post }) {
  const url = `https://www.appjitsu.net/blog/${post.slug}`;
  const title = post.data.title;
  const photo = post.data.photo;
  const description = post.data.excerpt;

  return (
    <div className="mt-10">
      <div className="mb-4">Share This Post</div>
      <div className="flex space-x-2">
        <a
          className="text-black hover:text-red-600 text-2xl"
          href={encodeURI(
            `https://www.facebook.com/sharer/sharer.php?u=${url}&p[title]=${title}&p[summary]=${description}&p[images][0]=${photo}&display=popup&ref=plugin&src=share_button`
          )}
          title="Share on Facebook"
          target="_blank"
          aria-label="Share on Facebook"
        >
          <FaFacebook />
        </a>
        <a
          className="text-black hover:text-red-600 text-2xl"
          href={encodeURI(
            `https://twitter.com/intent/tweet?text=${title}&url=${url}&via=app_jitsu`
          )}
          title="Share on Twitter"
          target="_blank"
          aria-label="Share on Twitter"
        >
          <FaSquareXTwitter />
        </a>
        <a
          className="text-black hover:text-red-600 text-2xl"
          href={encodeURI(
            `https://www.linkedin.com/shareArticle?url=${url}&title=${title}&summary=${description}&source=https://www.appjitsu.net/blog}`
          )}
          title="Share on LinkedIn"
          target="_blank"
          aria-label="Share on LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          className="text-black hover:text-red-600 text-2xl"
          href={encodeURI(
            `https://pinterest.com/pin/create/button/?url=${url}&media=${photo}&description=${title}`
          )}
          title="Share on Pinterest"
          target="_blank"
          aria-label="Share on Pinterest"
        >
          <FaPinterest />
        </a>
        <a
          className="text-black hover:text-red-600 text-2xl"
          href={encodeURI(
            `mailto:?subject=${title}&body=${description}\n\n${url}`
          )}
          title="Share by Email"
          target="_blank"
          aria-label="Or Share By Email"
        >
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
}
