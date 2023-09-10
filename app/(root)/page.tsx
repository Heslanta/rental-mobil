import { UserButton } from "@clerk/nextjs";

// Home Page atau General Structure
export default function Home() {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
      <h1 className="head-text text-left">Home</h1>
    </div>
  );
}
