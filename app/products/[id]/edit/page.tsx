'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

export default function EditProduct() {
  const { id } = useParams();
  const [form, setForm] = useState({ name: '', price: '' });
  const router = useRouter();

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(products => {
        const product = products.find((p: { id: number; name: string; price: number }) => p.id === Number(id));
        if (product) setForm({ name: product.name, price: product.price });
      });
  }, [id]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetch('/api/products', {
      method: 'PUT',
      body: JSON.stringify({ id: Number(id), name: form.name, price: Number(form.price) }),
    });
    router.push('/products');
  };

  return (
    <form onSubmit={handleSubmit} className="p-6">
      <h2 className="text-2xl font-bold mb-4">Edit Product</h2>
      <input
        type="text"
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
        className="border p-2 mb-4 w-full"
      />
      <input
        type="number"
        placeholder="Price"
        value={form.price}
        onChange={(e) => setForm({ ...form, price: e.target.value })}
        required
        className="border p-2 mb-4 w-full"
      />
      
      <button
        type="button"
        onClick={() => router.back()}
        className="bg-red-500 text-white px-3 py-1 rounded mr-2"
      >
        Back
      </button>
      <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded">
        Save Changes
      </button>
    </form>
  );
}