"use client"

import { Search } from "lucide-react"
import { Input } from "./ui/input"

const SearchBar = () => {
  return (
    <section className="relative w-[28rem]">
      <Input placeholder="Search for products..." onChange={() => {}} />
      <Search className="text-input absolute top-2 right-3" />
    </section>
  )
}

export default SearchBar
