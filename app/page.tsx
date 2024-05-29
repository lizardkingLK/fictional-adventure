import Link from "next/link";

export default function Home() {
  return (
    <section className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <Link href={"/dashboard"} className=" bg-green-500 p-2 text-white">
        Dashboard
      </Link>
    </section>
  );
}
