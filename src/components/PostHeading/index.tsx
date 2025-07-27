import clsx from 'clsx';
import Link from 'next/link';

type PostHeadingProps = {
  children: React.ReactNode;
  url: string;
  Tag?: 'h1' | 'h2';
};

export function PostHeading({
  children,
  url,
  Tag = 'h2',
}: PostHeadingProps) {
  const headingClassesMap = {
    h1: 'text-2xl/tight sm:text-4xl bg-red-500',
    h2: 'text-2xl/tight sm:text-4xl',
  };

  const commonClasses = 'font-extrabold';

  return (
    <Tag className={clsx(headingClassesMap[Tag], commonClasses)}>
      <Link href={url}>{children}</Link>
    </Tag>
  );
}