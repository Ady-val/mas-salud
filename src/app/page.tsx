import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export default async function Home() {
  const cookieStore = await cookies();
  const token = cookieStore.get('access_token')?.value;

  if (!token) {
    redirect('/login');
  }

  const res = await fetch('http://localhost:4000/me', {
    method: 'GET',
    headers: {
      Cookie: `access_token=${token}`,
    },
    credentials: 'include',
  });

  if (res.ok) {
    redirect('/dashboard');
  } else {
    redirect('/login');
  }
}
