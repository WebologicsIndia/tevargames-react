// layouts/AuthLayout.tsx
import { Outlet } from 'react-router-dom';
import BottomTab from '../BottomTab/BottomNavbar.tsx';

const AuthLayout = () => {
    return (
        <div className="min-h-screen">
            <Outlet />        {/* page content */}
            <BottomTab />     {/* ALWAYS visible */}
        </div>
    );
};

export default AuthLayout;
