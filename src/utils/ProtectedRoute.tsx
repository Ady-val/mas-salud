'use client';

import { useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('ProtectedRoute mounted');
    console.log('Router:', router);
  }, [router]);

  // useEffect(() => {
  //   const verifyToken = async () => {
  //     const token = localStorage.getItem('authToken');

  //     if (!token) {
  //       router.replace('/login');
  //       return;
  //     }

  //     try {
  //       await axios.get('/auth/me', {
  //         headers: { Authorization: `Bearer ${token}` },
  //       });
  //       setIsLoading(false);
  //     } catch (error) {
  //       localStorage.removeItem('authToken');
  //       router.replace('/login');
  //     }
  //   };

  //   verifyToken();
  // }, [router]);

  // if (isLoading) {
  //   return <p>Cargando...</p>;
  // }

  return <>{children}</>;
};

export default ProtectedRoute;
