import Link from "next/link";

export default function NavigationBar() {
  return (
    <>
      <nav className="flex gap-5 justify-evenly m-10 bg-emerald-500 p-2 font-bold rounded-2xl text-black font-sans text-2xl">
        <Link href="/">Home</Link>
        <Link
          href="/create"
          className="bg-black text-white p-1 hover:opacity-60 rounded-xl cursor-pointer "
        >
          Create
        </Link>
      </nav>
    </>
  );
}
