import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import Login from './pages/Login/Login.tsx';
import Home from './pages/Home/Home.tsx';
import Register from './pages/Register/Register.tsx';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot_reset" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
