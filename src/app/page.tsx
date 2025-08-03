import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

import { PostFeatured } from "@/components/PostFeatured";

export default async function HomePage() {
  return (
    <>
      <PostFeatured></PostFeatured>
      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
    </>
  );
}
