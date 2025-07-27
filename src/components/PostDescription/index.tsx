import { PostHeading } from "../PostHeading";

type PostDescriptionProps = {
  date: string;
  dateTime?: string;
  heading: string;
  headingUrl: string;
  children: React.ReactNode;
};

export function PostDescription({
  date,
  dateTime,
  heading,
  headingUrl,
  children,
}: PostDescriptionProps) {
  return (
    <div className="flex flex-col gap-2 sm:justify-center">
      <time className="text-slate-600 text-sm/tight" dateTime={dateTime || date}>
        {date}
      </time>

      <PostHeading Tag="h2" url={headingUrl}>
        {heading}
      </PostHeading>
      

      <p>{children}</p>
    </div>
  );
}
