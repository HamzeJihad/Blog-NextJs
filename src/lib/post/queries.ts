import { postRepository } from "@/repositories/post";
import { cache } from "react";
import { notFound } from 'next/navigation';



export const findAllPublicPostsCached = cache(
  async () => await postRepository.findAllPublic()
);

export const findPostBySlugCached = cache(async (slug: string) => {
  const post = await postRepository.findBySlug(slug).catch(() => undefined);

  if (!post) notFound();

  return post;
});

export const findPostByIdCached = cache(
  async (id: string) => await postRepository.findById(id),
);