'use client';

import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/logout`, {
        method: 'POST',
        credentials: 'include',
      });

      if (res.ok) {
        router.push('/admin/login');
      } else {
        console.error('Logout failed');
      }
    } catch (err) {
      console.error('Error:', err);
    }
  }

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
    >
      Logout
    </button>
  );
}
