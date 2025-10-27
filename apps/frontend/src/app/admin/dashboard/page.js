import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import LogoutButton from '@/components/LogoutButton';

export default async function Dashboard() {
  const cookieStore = cookies();
  const token = cookieStore.get('token')?.value || '';

  const res = await fetch('http://localhost:3000/dashboard-data', {
    headers: {
      cookie: `token=${token}`,
    },
    cache: 'no-store',
  });

  if (!res.ok) {
    redirect('/admin/login');
  }

  return (
    <>
      Hello
      <LogoutButton />
    </>
  );
}
