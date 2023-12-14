import { SignInButton, SignedOut, UserButton } from "@clerk/nextjs"
import Link from "next/link"
import Cart from "./Cart"
import ThemeToggle from "./ThemeToggle"
import Wrapper from "./Wrapper"
import { Button } from "./ui/button"

const Header = () => {
  return (
    <header className="shadow border-b py-2">
      <Wrapper className="flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold">ApexStore</h1>
        </Link>

        <div className="flex gap-3 items-center">
          <ThemeToggle />
          <Button size={"icon"}>
            <UserButton afterSignOutUrl="/" />
          </Button>
          <SignedOut>
            <Button className="mr-2">
              <SignInButton mode="modal" />
            </Button>
          </SignedOut>
          <Cart />
        </div>
      </Wrapper>
    </header>
  )
}

export default Header
