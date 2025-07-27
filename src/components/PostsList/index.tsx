import { postRepository } from "@/repositories/post";
import { PostCoverImage } from "../PostCoverImage";
import { PostDescription } from "../PostDescription";

export async function PostsList() {
  const posts = await postRepository.findAll();

  return (
    <div className="grid  grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => {
        const postLink = `/posts/${post.slug}`;
        return (
          <div className="flex flex-col gap-4 group" key={post.id}>
            <PostCoverImage
              linkProps={{
                href: postLink,
              }}
              imageProps={{
                width: 1200,
                height: 720,
                src: post.coverImageUrl,
                alt: post.title,
              }}
            ></PostCoverImage>
  
            <PostDescription
              date={post.createdAt}
              heading={post.title}
              headingUrl={postLink}
            >
              {post.excerpt}
            </PostDescription>
          </div>
        );
      })}
    </div>
  );
}
