import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      Dashboard Page
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
