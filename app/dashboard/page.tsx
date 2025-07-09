export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      {/* dashboard statistics placeholder */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Total Customers</h2>
          <p className="text-2xl">1,234</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Total Sales</h2>
          <p className="text-2xl">$12,345</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">New Orders</h2>
          <p className="text-2xl">567</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Pending Reviews</h2>
          <p className="text-2xl">89</p>
        </div>
      </div>
      {/* placeholder for recent activity */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
        <ul className="list-disc list-inside">
          <li>New customer registered: John Doe</li>
          <li>Order #1234 has been shipped</li>
          <li>Product review submitted: "Great quality!"</li>
        </ul>
      </div>
    </main>
  );
}