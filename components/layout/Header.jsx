import Link from "next/link";
import Image from "next/image";
import logo from "../../public/vercel.svg";

function Header() {
  return (
    <header className="h-header sticky top-0 z-10 flex w-full items-center justify-between bg-blue-600 p-4 text-right text-neutral-50 shadow-xl">
      <Link href="/" className="flex shrink-0 items-center gap-3 ">
        <Image
          src={logo}
          priority={true}
          alt="Skateboard Trick Tracker Logo"
          title="Skateboard Trick Tracker Logo"
          className="h-12 w-12 drop-shadow-lg transition-transform hover:scale-110 active:scale-100 sm:h-16 sm:w-16"
        />
        <span className="hidden whitespace-nowrap text-4xl font-semibold sm:block">
          My Sample App
        </span>
      </Link>
    </header>
  );
}

export default Header;
