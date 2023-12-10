import Link from "next/link"
import Cart from "./Cart"
import { ThemeToggle } from "./ThemeToggle"
import Wrapper from "./Wrapper"
import { Button } from "./ui/button"

const Header = () => {
  return (
    <header className="shadow">
      <Wrapper className="flex justify-between items-center">
        <Link href={"/"}>
          <h1 className="text-2xl font-bold">ApexStore</h1>
        </Link>

        <div className="flex gap-3 items-center">
          <ThemeToggle />
          <Button>Sign In</Button>
          <Cart />
        </div>
      </Wrapper>
    </header>
  )
}

export default Header
