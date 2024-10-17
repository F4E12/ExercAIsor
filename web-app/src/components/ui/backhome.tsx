import Link from "next/link";

interface BackButtonProps {
  path: string;
}

export default function BackButton({ path }: BackButtonProps) {
  return (
    <Link href={`/${path}`}>
      <div className="w-full flex absolute bottom-10">
        <div className="z-100 mx-auto bg-secondary text-secondary-foreground shadow-md rounded-lg px-4 py-2 hover:bg-secondary/80 transition transform hover:-translate-y-1 hover:scale-105 duration-300 ease-in-out inline-block">
          ← Back to {path.toWellFormed()}
        </div>
      </div>
    </Link>
  );
}
