"use client";
import { trpc } from "../server/client";

export default function Home() {
  const greeting = trpc.user.getGreeting.useQuery({ name: "world" });
  console.log(greeting);

  return (
    <div className="w-screen h-screen flex justify-center items-center text-white">
      Hello
      {JSON.stringify(greeting.data)}
    </div>
  );
}
