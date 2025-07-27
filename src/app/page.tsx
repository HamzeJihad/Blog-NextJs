import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";
import { PostHeading } from "@/components/PostHeading";
import { PostCoverImage } from "@/components/PostCoverImage";


export default async function HomePage() {
  return (
    <Container>
      <Header></Header>

      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
      <PostCoverImage linkProps={{
        href: '/posts',
      }} 
      imageProps= {{
        width: 1200, 
        height: 720,
        src: '/images/bryen_9.png',
        alt: 'Description of the image' 
      }}
      ></PostCoverImage>
        <div className= 'flex flex-col gap-2 sm:justify-center'>
          <time className="text-slate-600 text-sm/tight" dateTime="2025-07-27">27/07/2025 10:00</time>
          <PostHeading Tag='h2' url='#'>
            Rerum, vel ex? Impedit ullam harum blanditiis
          </PostHeading>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In velit
          dolorem est dolor porro, doloribus neque, quidem mollitia doloremque,
          ad perspiciatis fugiat. Rerum, vel ex? Impedit ullam harum blanditiis
          mollitia?
          </p>
        </div>
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
