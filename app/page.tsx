import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold">Hello World</h1>
      <p className="p-10 w-1/2 text-center text-2xl">
        a to-app that gives you the ability to create to-do list with repeated
        task as you like and each task has its own sub-tasks
      </p>
      <Button variant="outline" className="px-10 py-5 text-2xl">
        Start now
      </Button>
    </main>
  );
}
