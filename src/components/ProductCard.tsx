'use client';
import Image from 'next/image';
import Link from 'next/link';
import { addToCart } from '@/lib/cart';
import { Product } from '@/types/index';

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border rounded p-2">
      <Link href={`/produto/${product.slug}`}>
        <Image
          src={product.images[0]}
          alt={product.name}
          width={400}
          height={500}
          className="object-cover"
        />
      </Link>
      <h3 className="font-bold text-sm mt-1">{product.name}</h3>
      <p className="text-xs text-zinc-500">{product.category}</p>
      <p className="font-semibold text-emerald-600">
        R$ {(product.price / 100).toFixed(2)}
      </p>
      <button
        onClick={() => addToCart(product)}
        className="w-full mt-2 bg-black text-white text-xs py-1 rounded"
      >
        Adicionar
      </button>
    </div>
  );
}
