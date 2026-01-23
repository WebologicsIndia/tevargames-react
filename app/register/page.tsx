'use client';

import './register.css';
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
  MailOutlined,
} from '@ant-design/icons';

const Register = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [inviteCode, setInviteCode] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [loading, setLoading] = useState(false);

  const validatePhone = (phone: string): boolean => {
    // Basic Indian phone number validation (10 digits)
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  const validatePassword = (password: string): boolean => {
    // Password must be at least 6 characters, contain at least one number and one letter
    const minLength = password.length >= 6;
    const hasNumber = /\d/.test(password);
    const hasLetter = /[a-zA-Z]/.test(password);
    return minLength && hasNumber && hasLetter;
  };

  const handleRegister = async () => {
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
      message.error('Please set a password');
      return;
    }

    if (!validatePassword(password)) {
      message.error('Password must be at least 6 characters and contain both letters and numbers');
      return;
    }

    if (!confirmPassword.trim()) {
      message.error('Please confirm your password');
      return;
    }

    if (password !== confirmPassword) {
      message.error('Passwords do not match');
      return;
    }

    if (!agreedToTerms) {
      message.error('Please agree to the Privacy Agreement to continue');
      return;
    }

    setLoading(true);

    try {
      // TODO: Replace with actual API call
      // const response = await fetch('/api/auth/register', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     phone: `+91${phone}`,
      //     password,
      //     inviteCode: inviteCode || undefined,
      //   }),
      // });
      //
      // const data = await response.json();
      //
      // if (!response.ok) {
      //   throw new Error(data.message || 'Registration failed');
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
      // message.success('Registration successful!');
      // router.push('/home');

      // Temporary: Simulate successful registration for testing
      dispatch(setCredentials({
        token: 'mock_token_67890',
        user: {
          id: '2',
          phone: `+91${phone}`,
          name: 'New User',
        },
      }));
      message.success('Registration successful!');
      router.push('/home');
    } catch (error: any) {
      message.error(error.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <div className="register-content">
        {/* NAVBAR */}
        <div className="register-navbar">
          <ArrowLeftOutlined className="register-back" onClick={() => router.back()} />
          <img src="/whitehjj.png" className="register-logo" alt="Logo" />
        </div>

        {/* HEADING */}
        <h1 className="register-title">Register</h1>
        <div className="register-subtitle">Please register by phone number or email</div>

        {/* TAB */}
        <div className="flex justify-center mb-[0.74667rem]">
          <div className="register-tab">
            <PhoneOutlined className="text-[0.64rem]" />
            <span>Register your phone</span>
          </div>
        </div>

        {/* PHONE */}
        <label className="register-label register-label-primary">
          <PhoneOutlined className="text-[0.64rem]" />
          Phone number
        </label>

        <div className="register-phone-wrapper mb-[0.8rem]">
          <div className="register-country">
            <span>+91</span>
            <span>▼</span>
          </div>

          <Input
            placeholder="Please enter the phone number"
            className="register-input register-phone-input"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            maxLength={10}
          />
        </div>

        {/* PASSWORD */}
        <label className="register-label">
          <LockOutlined className="text-[0.64rem]" style={{ color: 'var(--main-color)' }} />
          Set password
        </label>

        <Password
          placeholder="Set password"
          iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          className="register-input register-password-input mb-[0.53333rem]"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* CONFIRM PASSWORD */}
        <label className="register-label">
          <LockOutlined className="text-[0.64rem]" style={{ color: 'var(--main-color)' }} />
          Confirm password
        </label>

        <Password
          placeholder="Confirm password"
          iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          className="register-input register-password-input mb-[0.53333rem]"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        {/* INVITE */}
        <label className="register-label">
          <MailOutlined className="text-[0.64rem]" style={{ color: 'var(--main-color)' }} />
          Invite code
        </label>

        <Input
          placeholder="Please enter the invitation code"
          className="register-input mb-[0.8rem]"
          value={inviteCode}
          onChange={(e) => setInviteCode(e.target.value)}
        />

        {/* TERMS */}
        <div className="mb-[0.76rem]">
          <Checkbox
            className="register-terms"
            checked={agreedToTerms}
            onChange={(e) => setAgreedToTerms(e.target.checked)}
          >
            <span className="register-terms-text">
              I have read and agree{' '}
              <span className="register-terms-link" onClick={() => router.push('/privacy-policy')}>
                【Privacy Agreement】
              </span>
            </span>
          </Checkbox>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col items-center mt-[0.76rem]">
          <button className="register-primary-btn" onClick={handleRegister} disabled={loading}>
            {loading ? 'Registering...' : 'Register'}
          </button>

          <button onClick={() => router.push('/login')} className="register-secondary-btn" disabled={loading}>
            <span className="register-secondary-text">I have an account</span>
            <span className="register-secondary-link">Login</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
