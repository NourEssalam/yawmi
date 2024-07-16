import Link from "next/link";

export default function Header() {
  return (
    <header className="flex sticky top-0 z-10 items-center justify-between p-4 w-1/2 bg-red-200 mx-auto my-0">
      <Link href="/" className="text-2xl font-bold">
        Todo App
      </Link>
      <div className="flex space-x-4">
        <Link href="/login" className="hover:underline">
          Login
        </Link>
        <span>|</span>
        <Link href="/sign-in" className="hover:underline">
          Sign-In
        </Link>
      </div>
    </header>
  );
}
