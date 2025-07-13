import clsx from "clsx";

export default function HomePage() {
  return (
    <div>
      <h1
        className={clsx("text-3xl", "font-bold", "hover:bg-blue-300", {
          "text-blog": false,
        })}
      >
        Texto no meu h1
      </h1>
    </div>
  );
}
