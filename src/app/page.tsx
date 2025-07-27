import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { postRepository } from "@/repositories/post";
import clsx from "clsx";
import Link from "next/link";
import { Suspense } from "react";
import Image from "next/image";


export default async function HomePage() {
  return (
    <Container>
      <Header></Header>

      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
        <Link className="w-full h-full  overflow-hidden rounded-xl" href="#">
        <Image
            className="group-hover:scale-105 transition object-cover"
            src="/images/bryen_0.png"
            width={1200}
            height={720}
            alt="Título do post"
            priority
          />
        </Link>
        <div className= 'flex flex-col gap-2 sm:justify-center'>
          <time className="text-slate-600 text-sm/tight" dateTime="2025-07-27">27/07/2025 10:00</time>
          <h1 className="text-2xl/tight font-extrabold sm:text-4xl">
            <Link href="#">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </h1>
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
