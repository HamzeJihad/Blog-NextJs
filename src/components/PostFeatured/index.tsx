import { findAllPublicPosts } from "@/lib/post/queries";
import { PostCoverImage } from "../PostCoverImage";
import { PostDescription } from "../PostDescription";

export async function PostFeatured() {
  const posts = await findAllPublicPosts();
  const post = posts[0];
  const postLink = `/post/${post.slug}`;

  return (
    <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
      <PostCoverImage
        linkProps={{
          href: postLink,
        }}
        imageProps={{
          width: 1200,
          height: 720,
          src: post.coverImageUrl,
          alt: post.title,
          priority: true,
        }}
      ></PostCoverImage>
      <PostDescription
        date={post.createdAt}
        heading={post.title}
        headingUrl={postLink}
      >
        {post.content}
      </PostDescription>
    </section>
  );
}
