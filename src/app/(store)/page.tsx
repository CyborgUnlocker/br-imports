import { ProductCard } from '@/components/ProductCard';
import { getProducts } from '@/lib/data';

export default async function Home() {
  const products = await getProducts();
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {products.map(p => <ProductCard key={p.id} product={p} />)}
    </section>
  );
}
