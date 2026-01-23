'use client';

import { ArrowLeftOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function Jackpot() {
  const router = useRouter();
  return (
    <ProtectedRoute>
      <div className="min-h-screen p-4" style={{ backgroundColor: 'var(--bg_color_L1)', color: 'var(--text_color_L1)' }}>
        <div className="flex items-center gap-4 mb-4">
          <ArrowLeftOutlined onClick={() => router.back()} className="cursor-pointer text-xl" />
          <h1 className="text-xl font-bold">Super Jackpot</h1>
        </div>
        <p style={{ color: 'var(--text_color_L2)' }}>Super Jackpot content coming soon...</p>
      </div>
    </ProtectedRoute>
  );
}
