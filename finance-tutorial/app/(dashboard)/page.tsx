import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      This route from authenticated page
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
