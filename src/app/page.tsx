import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
    <SignedIn>
      <UserButton/>
    </SignedIn>

    <SignedOut>
      <SignInButton/>
    </SignedOut>
    </div>
  );
}
