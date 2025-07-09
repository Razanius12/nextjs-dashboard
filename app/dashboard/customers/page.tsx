export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      {/*  example of placeholder hardcoded customers table with one column and a title */}
      <h1 className="text-2xl font-bold mb-4">Customers</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border-b">John Doe</td>
            <td className="py-2 px-4 border-b">john@example.com</td>
            <td className="py-2 px-4 border-b">(123) 456-7890</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b">Jane Smith</td>
            <td className="py-2 px-4 border-b">jane@example.com</td>
            <td className="py-2 px-4 border-b">(987) 654-3210</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b">Alice Johnson</td>
            <td className="py-2 px-4 border-b">alice@example.com</td>
            <td className="py-2 px-4 border-b">(555) 123-4567</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b">Bob Brown</td>
            <td className="py-2 px-4 border-b">bob@example.com</td>
            <td className="py-2 px-4 border-b">(444) 555-6666</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}