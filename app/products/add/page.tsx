'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function AddProduct() {
  const [form, setForm] = useState({ name: '', price: '' });
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetch('/api/products', {
      method: 'POST',
      body: JSON.stringify({ name: form.name, price: Number(form.price) }),
    });
    router.push('/products');
  };

  return (
    <form onSubmit={handleSubmit} className="p-6">
      <h2 className="text-2xl font-bold mb-4">Add Product</h2>
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
      <button
        type="reset"
        onClick={() => setForm({ name: '', price: '' })}
        className="bg-yellow-500 text-white px-3 py-1 rounded mr-2"
      >
        Reset
      </button>
      <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded">
        Add Product
      </button>
    </form>
  );
}