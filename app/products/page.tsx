'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Product {
 id: string;
 name: string;
 price: number;
}

export default function ProductsPage() {
 const [products, setProducts] = useState<Product[]>([]);

 const handleDelete = async (id: string) => {
  const ok = window.confirm('Are you sure you want to delete this product?');
  if (!ok) return;
  await fetch('/api/products', {
   method: 'DELETE',
   body: JSON.stringify({ id }),
  });
  fetch('/api/products').then((res) => res.json()).then(setProducts);
 };

 useEffect(() => {
  fetch('/api/products').then(res => res.json()).then(setProducts);
 }, []);

 return (
  <main className="p-6">
   <h1 className="text-2xl font-bold mb-4">Products</h1>
   <Link href="/products/add" className="bg-blue-500 text-white px-3 py-1 rounded">Add Product</Link>
   <table className="min-w-full bg-white border text-left">
    <thead>
     <tr>
      <th className="py-2 px-4 border-b">ID</th>
      <th className="py-2 px-4 border-b">Name</th>
      <th className="py-2 px-4 border-b">Price</th>
      <th className="py-2 px-4 border-b">Actions</th>
     </tr>
    </thead>
    <tbody>
     {products.map(product => (
      <tr key={product.id}>
       <td className="py-2 px-4 border-b">{product.id}</td>
       <td className="py-2 px-4 border-b">{product.name}</td>
       <td className="py-2 px-4 border-b">${(product.price / 100).toFixed(2)}</td>
       <td className="py-2 px-4 border-b">
        <Link href={`/products/${product.id}/edit`} className="text-blue-600">Edit</Link>
        <button
         onClick={() => handleDelete(product.id)}
         type="button"
         className="ml-2 text-red-600"
        >
         Delete
        </button>
       </td>
      </tr>
     ))}
    </tbody>
   </table>
  </main>
 );
}