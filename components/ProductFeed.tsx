"use client"

import { RootState } from "@/redux/rootReducer"
import { useSelector } from "react-redux"
import ProductCard from "./ProductCard"

const ProductFeed: React.FC<{ products: ProductProps[] }> = ({ products }) => {
  const searchTerm = useSelector((state: RootState) => state.filters.searchTerm)

  const filteredProducts = products.filter((product: ProductProps) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <article className="grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {filteredProducts.map((product: ProductProps) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </article>
  )
}
export default ProductFeed
