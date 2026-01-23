'use client';

import './header.css';
import { DownloadOutlined, MailOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { isAuthenticated } from '@/lib/auth';
import { useEffect, useState } from 'react';

const Header = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(isAuthenticated());
  }, []);

  return (
    <div className="app-header">
      {/* LEFT PLACEHOLDER */}
      <div className="header-left-space" />

      {/* CENTER LOGO */}
      <div className="header-logo-wrapper">
        <img src="/whitehjj.png" alt="Tevar Game" className="header-logo" />
      </div>

      {/* RIGHT ICONS */}
      <div className="header-actions">
        {isLoggedIn ? (
          <>
            {/* MAIL ICON */}
            <div className="header-icon header-icon-primary">
              <MailOutlined className="header-icon-mail" />
            </div>

            {/* DOWNLOAD ICON */}
            <div className="header-icon">
              <DownloadOutlined />
            </div>
          </>
        ) : (
          <>
            {/* LOGIN BUTTON */}
            <button
              className="header-auth-btn header-login-btn"
              onClick={() => router.push('/login')}
            >
              Login
            </button>

            {/* SIGNUP BUTTON */}
            <button
              className="header-auth-btn header-signup-btn"
              onClick={() => router.push('/register')}
            >
              Sign Up
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
