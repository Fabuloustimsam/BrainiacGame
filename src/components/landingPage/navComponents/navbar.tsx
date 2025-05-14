import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between w-full px-4 sm:px-6 lg:px-10 py-4 text-blue-500 font-bold text-2xl">
      <div className="flex-shrink-0">
        <Image
          alt="Brainiac logo"
          src="/BrainiacLogo.svg"
          width={200}
          height={50}
          className="w-auto h-auto max-w-[200px]"
        />
      </div>
      <Link href="/login">
        <button className="bg-purple-700 hover:bg-purple-500 active:shadow-2xl text-white rounded-xl w-40 sm:w-60 h-12 sm:h-14 text-sm">
          LOGIN
        </button>
      </Link>
    </nav>
  );
}
