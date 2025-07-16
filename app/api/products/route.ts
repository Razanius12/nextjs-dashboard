let products = [
  { id: 1, name: 'Product A', price: 10000 },
  { id: 2, name: 'Product B', price: 20000 },
];

// GET: Ambil semua produk
export async function GET() {
  return Response.json(products);
}

// POST: Tambah produk baru
export async function POST(request: Request) {
  const { name, price } = await request.json();
  const id = products.length ? products[products.length - 1].id + 1 : 1;
  const newProduct = { id, name, price };
  products.push(newProduct);
  return Response.json(newProduct, { status: 201 });
}

// PUT: Update produk
export async function PUT(request: Request) {
  const { id, name, price } = await request.json();
  const idx = products.findIndex((p) => p.id === id);
  if (idx === -1) return Response.json({ error: 'Not found' }, { status: 404 });
  products[idx] = { id, name, price };
  return Response.json(products[idx]);
}

// DELETE: Hapus produk
export async function DELETE(request: Request) {
  const { id } = await request.json();
  products = products.filter((p) => p.id !== id);
  return Response.json({ success: true });
}