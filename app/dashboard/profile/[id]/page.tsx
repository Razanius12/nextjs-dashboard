import { users } from '../../../lib/placeholder-data';

export default function ProfilePage({ params }: { params: { id: string } }) {
  const user = users.find(u => u.id === params.id);

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <main>
      <h1 className="text-2xl font-bold mb-4">Profile: {user.name}</h1>
      <div className="bg-white p-6 rounded shadow">
        <p className="mb-2"><strong>ID:</strong> {user.id}</p>
        <p className="mb-2"><strong>Name:</strong> {user.name}</p>
        <p className="mb-2"><strong>Email:</strong> {user.email}</p>
      </div>
    </main>
  );
}