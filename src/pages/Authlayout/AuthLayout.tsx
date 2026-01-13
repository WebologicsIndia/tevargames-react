// layouts/AuthLayout.tsx
import { Outlet } from 'react-router-dom';
import BottomTab from '../BottomTab/BottomTab.tsx';

const AuthLayout = () => {
    return (
        <div className="min-h-screen pb-[3.2rem]">
            <Outlet />        {/* page content */}
            <BottomTab />     {/* ALWAYS visible */}
        </div>
    );
};

export default AuthLayout;
