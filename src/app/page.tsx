import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";
import { PostHeading } from "@/components/PostHeading";
import { PostCoverImage } from "@/components/PostCoverImage";
import { PostDescription } from "@/components/PostDescription";

export default async function HomePage() {
  return (
    <Container>
      <Header></Header>

      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
        <PostCoverImage
          linkProps={{
            href: "/posts",
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
          date="27/07/2025 10:00"
          heading="Rerum, vel ex? Impedit ullam harum blanditiis"
          headingUrl="#"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In velit
          dolorem est dolor porro, doloribus neque, quidem mollitia doloremque,
          ad perspiciatis fugiat. Rerum, vel ex? Impedit ullam harum blanditiis
          mollitia?
        </PostDescription>
      </section>
      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
      <footer>
        <p className="text-6xl font-bold text-center py-8">aqui é o footer</p>
      </footer>
    </Container>
  );
}
