import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link
        href={"/dashboard"}
        className=" bg-green-500 p-2 text-white"
      >
        Dashboard
      </Link>
    </main>
  );
}
