import Link from "next/link";

export default function Header() {
  return (
    <header className="flex sticky md:top-5 z-10 items-center mb-20 md:rounded-full  justify-between md:py-5 px-5 md:px-24 md:max-w-screen-sm lg:max-w-screen-lg mx-auto  bg-gray-200 ">
      <Link href="/" className="text-2xl font-bold">
        Yawmi
      </Link>
      <Link href="/to-do" className="text-2xl font-bold">
        To Do
      </Link>

      <div className="flex flex-col md:flex-row items-center ">
        <Link
          href="/auth/login"
          className="hover:underline   font-semibold text-black  visited:border-dotted md:px-2 py-1"
        >
          Login
        </Link>
        {/* <span>|</span> */}
        <Link
          href="/auth/signin"
          className="hover:underline font-semibold text-black  visited:underline border-t md:border-l md:border-t-0 md:px-2 border-black py-1"
        >
          Sign-In
        </Link>
      </div>
    </header>
  );
}
