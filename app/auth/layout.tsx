import Link from "next/link";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="">
      <h1>Registration Dashboard</h1>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav className="flex gap-4">
        <Link href="/auth">Home</Link>
        <Link href="/auth/login">Login</Link>
        <Link href="/auth/signin">Sign In</Link>
      </nav>

      {children}
    </section>
  );
}
