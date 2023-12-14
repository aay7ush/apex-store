import ProductCard from "./ProductCard"

const ProductFeed: React.FC<{ products: ProductProps[] }> = ({ products }) => {
  return (
    <article className="grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product: ProductProps) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </article>
  )
}
export default ProductFeed
