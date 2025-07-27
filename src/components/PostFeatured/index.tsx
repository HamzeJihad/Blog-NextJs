import { PostCoverImage } from "../PostCoverImage";
import { PostDescription } from "../PostDescription";

export function PostFeatured() {
  const slug = "qualquer";
  const postLink = `/post/${slug}`;

  return (
    <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
      <PostCoverImage
        linkProps={{
          href: postLink,
        }}
        imageProps={{
          width: 1200,
          height: 720,
          src: "/images/bryen_9.png",
          alt: "Description of the image",
          priority: true,
        }}
      ></PostCoverImage>
      <PostDescription
        date="2025-07-27T10:00:00"
        heading="Rerum, vel ex? Impedit ullam harum blanditiis"
        headingUrl={postLink}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In velit
        dolorem est dolor porro, doloribus neque, quidem mollitia doloremque, ad
        perspiciatis fugiat. Rerum, vel ex? Impedit ullam harum blanditiis
        mollitia?
      </PostDescription>
    </section>
  );
}
