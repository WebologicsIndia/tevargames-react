// layouts/AuthLayout.tsx
import { Outlet } from 'react-router-dom';
import BottomTab from '../BottomTab/BottomNavbar.tsx';

const AuthLayout = () => {
    return (
        <div className="w-[10rem] min-h-screen bg-(--bg_color_L1) text-(--text_color_L1)">
            <Outlet />        {/* page content */}
            <BottomTab />     {/* ALWAYS visible */}
        </div>
    );
};

export default AuthLayout;
