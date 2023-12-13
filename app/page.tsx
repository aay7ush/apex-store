import Filters from "@/components/Filters"
import SearchBar from "@/components/SearchBar"

export default function Home() {
  return (
    <>
      <article className="flex gap-5 flex-col md:flex-row items-center justify-between mb-10">
        <SearchBar />
        <Filters />
      </article>
    </>
  )
}
