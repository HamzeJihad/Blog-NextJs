import { formatDatetime, formatDistanceToNow } from "@/utils/format-datetime";
import { PostHeading } from "../PostHeading";
import { PostDate } from "../PostDate";

type PostDescriptionProps = {
  date: string;
  heading: string;
  headingUrl: string;
  children: React.ReactNode;
};

export function PostDescription({
  date,
  heading,
  headingUrl,
  children,
}: PostDescriptionProps) {
  return (
    <div className="flex flex-col gap-2 sm:justify-center">
      <PostDate dateTime={date}></PostDate>

      <PostHeading Tag="h2" url={headingUrl}>
        {heading}
      </PostHeading>

      <p>{children}</p>
    </div>
  );
}
