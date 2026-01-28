'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { isAuthenticated } from '@/lib/auth';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const router = useRouter();

  useEffect(() => {
    // if (!isAuthenticated()) {
    //   // Use replace instead of push to avoid adding to history stack
    //   router.replace('/login');
    // }
  }, [router]);

  // Don't render children until auth check is complete
  // if (!isAuthenticated()) {
  //   return null;
  // }

  return <>{children}</>;
};

export default ProtectedRoute;
