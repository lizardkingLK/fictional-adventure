import Link from "next/link";

export default function Home() {
  return (
    <main className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Link
        href={"/dashboard"}
        className=" bg-green-500 p-2 text-white"
      >
        Dashboard
      </Link>
    </main>
  );
}
