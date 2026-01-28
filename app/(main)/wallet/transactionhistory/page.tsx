'use client';

import { ArrowLeftOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';

export default function TransactionHistoryPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen p-4" style={{ backgroundColor: 'var(--bg_color_L1)', color: 'var(--text_color_L1)' }}>
      <div className="flex items-center gap-4 mb-4">
        <ArrowLeftOutlined onClick={() => router.back()} className="cursor-pointer text-xl" />
        <h1 className="text-xl font-bold">TransactionHistory</h1>
      </div>
      <p style={{ color: 'var(--text_color_L2)' }}>Content coming soon...</p>
    </div>
  );
}
