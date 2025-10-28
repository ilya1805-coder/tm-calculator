import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Tab from '@/components/Tab';
import LogoutButton from '@/components/LogoutButton';
import AdminForm from '@/components/AdminForm';

export default async function Dashboard() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value || '';

  const res = await fetch(
    //TODO API calls should be moved to helpers
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/dashboard-data`,
    {
      headers: {
        cookie: `token=${token}`,
      },
      cache: 'no-store',
    }
  );

  if (!res.ok) {
    redirect('/admin/login');
  }

  const pricesRes = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/prices/trademarkRegistrationUa`,
    {
      headers: {
        cookie: `token=${token}`,
      },
    }
  );

  if (!pricesRes.ok) {
    throw new Error('Failed to fetch prices');
  }

  const prices = await pricesRes.json();

  return (
    <>
      <div className="space-y-4">
        <Tab title="Prices">
          <AdminForm
            formFields={[
              ['applicationBase', 'Application Base', 'number'],
              ['applicationPerClass', 'Application per Class', 'number'],
              ['registrationBase', 'Registration Base', 'number'],
              ['registrationPerClass', 'Registration per Class', 'number'],
              ['search', 'Search', 'number'],
              ['isColored', 'Is Colored', 'number'],
              ['multipleApplicants', 'Multiple Applicants', 'number'],
              ['isExpress', 'Is Express', 'number'],
              ['discountPercent', 'Discount (%)', 'number'],
            ]}
            initialData={prices}
            actionUrl={`${process.env.NEXT_PUBLIC_BACKEND_URL}/prices`}
            successMessage="Prices updated successfully!"
            failMessage="Failed to update prices"
            buttonText="Update prices"
            token={token}
          />
        </Tab>
      </div>
      <div className="space-y-4 mt-8">
        <LogoutButton />
      </div>
    </>
  );
}
