import Link from "next/link";

export default function BackButton() {
  return (
    <Link href="/">
      <div className="bg-secondary text-secondary-foreground shadow-md rounded-lg px-4 py-2 hover:bg-secondary/80 transition transform hover:-translate-y-1 hover:scale-105 duration-300 ease-in-out inline-block absolute left-10 top-10">
        ← Back to Home
      </div>
    </Link>
  );
}
