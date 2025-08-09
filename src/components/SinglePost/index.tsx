import { findPostBySlugCached } from "@/lib/post/queries";
import Image from "next/image";
import { PostHeading } from "../PostHeading";
import { PostDate } from "../PostDate";
import { SafeMarkdown } from "../SafeMarkdown";

type SinglePostProps = {
  slug: string;
};

export async function SinglePost({ slug }: SinglePostProps) {
  const post = await findPostBySlugCached(slug);

  return (
    <article>
      <header className="group flex flex-col gap-4 mb-8">
        <Image
          src={post.coverImageUrl}
          alt={post.title}
          width={1200}
          height={720}
          className="w-full h-auto rounded-lg mb-6"
        ></Image>
        <PostHeading url={`/post/${post.slug}`}>{post.title}</PostHeading>

        <p>
          {post.author} | <PostDate dateTime={post.createdAt}></PostDate>
        </p>

        <p className="text-xl">
          {post.excerpt}
        </p>
        <SafeMarkdown markdown={post.content} />
      </header>
    </article>
  );
}
