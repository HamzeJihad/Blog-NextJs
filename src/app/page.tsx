import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { postRepository } from "@/repositories/post";
import clsx from "clsx";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <Container>
      <Header></Header>
      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
      <footer>
        <p className="text-6xl font-bold text-center py-8">aqui é o footer</p>
      </footer>
    </Container>
  );
}
