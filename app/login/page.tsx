'use client';

import './login.css';
import { useRouter } from 'next/navigation';
import { Input, Checkbox, message } from 'antd';
import { useState } from 'react';
import { useAppDispatch } from '@/lib/redux/hooks';
import { setCredentials } from '@/lib/redux/slices/authSlice';

const { Password } = Input;
import {
  ArrowLeftOutlined,
  PhoneOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  CustomerServiceOutlined,
} from '@ant-design/icons';

const Login = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [rememberPassword, setRememberPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const validatePhone = (phone: string): boolean => {
    // Basic Indian phone number validation (10 digits)
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  const validatePassword = (password: string): boolean => {
    // Password must be at least 6 characters
    return password.length >= 6;
  };

  const handleLogin = async () => {
    // Validation checks
    if (!phone.trim()) {
      message.error('Please enter your phone number');
      return;
    }

    if (!validatePhone(phone)) {
      message.error('Please enter a valid 10-digit phone number');
      return;
    }

    if (!password.trim()) {
      message.error('Please enter your password');
      return;
    }

    if (!validatePassword(password)) {
      message.error('Password must be at least 6 characters');
      return;
    }

    setLoading(true);

    try {
      // TODO: Replace with actual API call
      // const response = await fetch('/api/auth/login', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     phone: `+91${phone}`,
      //     password,
      //     rememberPassword,
      //   }),
      // });
      //
      // const data = await response.json();
      //
      // if (!response.ok) {
      //   throw new Error(data.message || 'Login failed');
      // }
      //
      // // Dispatch Redux action to store token and user
      // dispatch(setCredentials({
      //   token: data.token,
      //   user: {
      //     id: data.user.id,
      //     phone: data.user.phone,
      //     email: data.user.email,
      //     name: data.user.name,
      //   },
      // }));
      //
      // message.success('Login successful!');
      // router.push('/home');

      // Temporary: Simulate successful login for testing
      dispatch(setCredentials({
        token: 'mock_token_12345',
        user: {
          id: '1',
          phone: `+91${phone}`,
          name: 'Test User',
        },
      }));
      message.success('Login successful!');
      router.push('/home');
    } catch (error: any) {
      message.error(error.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        {/* NAVBAR */}
        <div className="login-navbar">
          <ArrowLeftOutlined className="login-back" onClick={() => router.back()} />
          <img src="/whitehjj.png" alt="Logo" className="login-logo" />
        </div>

        {/* HEADING */}
        <h1 className="login-title">Log in</h1>
        <div className="login-subtitle">
          <span>Please log in with your phone number or email</span>
          <span>If you forget your password, please contact customer service</span>
        </div>

        {/* TAB */}
        <div className="flex justify-center mb-[0.74667rem]">
          <div className="login-tab">
            <PhoneOutlined className="text-[0.64rem]" />
            <span>Log in with phone</span>
          </div>
        </div>

        {/* PHONE INPUT */}
        <label className="login-label login-label-primary">
          <PhoneOutlined className="text-[0.64rem]" />
          Phone number
        </label>

        <div className="login-phone-wrapper mb-[0.8rem]">
          <div className="login-country-code">
            <span>+91</span>
            <span>▼</span>
          </div>

          <Input
            placeholder="Please enter the phone number"
            className="login-input login-phone-input"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            maxLength={10}
          />
        </div>

        {/* PASSWORD */}
        <label className="login-label">
          <LockOutlined className="text-[0.64rem]" />
          Password
        </label>

        <Password
          placeholder="Password"
          iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          className="login-input mb-[0.53333rem]"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* REMEMBER */}
        <Checkbox
          className="login-remember"
          checked={rememberPassword}
          onChange={(e) => setRememberPassword(e.target.checked)}
        >
          Remember password
        </Checkbox>

        {/* BUTTONS */}
        <div className="flex flex-col items-center mt-[0.76rem]">
          <button className="login-primary-btn" onClick={handleLogin} disabled={loading}>
            {loading ? 'Logging in...' : 'Log in'}
          </button>
          <button onClick={() => router.push('/register')} className="login-secondary-btn" disabled={loading}>
            Register
          </button>
        </div>

        {/* FOOTER */}
        <div className="login-footer">
          <div className="login-footer-item" onClick={() => router.push('/forgot_reset')}>
            <LockOutlined className="text-[1.06667rem]" />
            <span className="mt-[0.21333rem]">Forgot password</span>
          </div>

          <div className="login-footer-item">
            <CustomerServiceOutlined className="text-[1.06667rem]" />
            <span className="mt-[0.21333rem]">Customer Service</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
