"use client"

import { ShoppingCart } from "lucide-react"
import { useRouter } from "next/navigation"
import { Button } from "./ui/button"

const Cart = () => {
  const router = useRouter()

  return (
    <div className="relative">
      <Button size={"icon"} onClick={() => router.push("/cart")}>
        <ShoppingCart />
      </Button>

      <p className="bg-secondary text-primary font-medium w-5 h-5 rounded-full grid place-content-center absolute -right-2 -top-2">
        0
      </p>
    </div>
  )
}
export default Cart
