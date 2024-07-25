import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className=" container flex flex-col gap-3 justify-center items-center">
      <div className="w-full md:w-1/2  border-l border-r border-gray-300 p-5 rounded max-h-80 overflow-y-scroll">
        {children}
      </div>

      <div className="flex justify-between md:justify-around md:w-1/4 w-1/2  p-5 rounded text-2xl">
        <Link href="https://github.com/">
          <FaGithub className="hover:text-black/80 " />
        </Link>
        <Link href="https://github.com/">
          <FaFacebook className="hover:text-blue-600" />
        </Link>
        <Link href="https://github.com/">
          <FaGoogle className="hover:text-red-600" />
        </Link>
      </div>
    </section>
  );
}
