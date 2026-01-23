'use client';

import { usePathname, useRouter } from 'next/navigation';
import './bottomNavbar.css';
import { GiftOutlined, HomeOutlined, ThunderboltOutlined, UserOutlined, WalletOutlined } from '@ant-design/icons';

const BottomNavbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (path: string) => (pathname === path ? 'active' : '');

  return (
    <div className="tabbar__container">
      {/* Home */}
      <div
        className={`tabbar__container-item home_tab_btn ${isActive('/home')}`}
        onClick={() => router.push('/home')}
      >
        <HomeOutlined />
        <span>Home</span>
      </div>

      {/* Activity */}
      <div
        className={`tabbar__container-item activity_tab_btn ${isActive('/activity')}`}
        onClick={() => router.push('/activity')}
      >
        <ThunderboltOutlined />
        <span>Activity</span>
      </div>

      {/* Promotion (center) */}
      <div className="tabbar__container-item" onClick={() => router.push('/promotion')}>
        <GiftOutlined />
        <div className="promotionBg" />
        <span>Promotion</span>
      </div>

      {/* Wallet */}
      <div
        className={`tabbar__container-item wallet_tab_btn ${isActive('/wallet')}`}
        onClick={() => router.push('/wallet')}
      >
        <WalletOutlined />
        <span>Wallet</span>
      </div>

      {/* Account */}
      <div
        className={`tabbar__container-item account_tab_btn ${isActive('/account')}`}
        onClick={() => router.push('/account')}
      >
        <UserOutlined />
        <span>Account</span>
      </div>
    </div>
  );
};

export default BottomNavbar;
