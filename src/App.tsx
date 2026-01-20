import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import Login from './pages/Login/Login.tsx';
import Home from './pages/Home/Home.tsx';
import Register from './pages/Register/Register.tsx';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword.tsx';
import AuthLayout from "./pages/Authlayout/AuthLayout.tsx";
import Activity from "./pages/Activity/Activity.tsx";
import ActivityAward from "./pages/Activity/Screens/ActivityAward";
import Rebate from "./pages/Activity/Screens/Rebate/Rebate.tsx";
import SuperJackpot from "./pages/Activity/Screens/SuperJackpot/SuperJackpot.tsx";
import NewGift from "./pages/Activity/Screens/NewGift/NewGift.tsx";
import Gift from "./pages/Activity/Screens/Gift/Gift.tsx";
import Attendance from "./pages/Activity/Screens/Attendance/Attendance.tsx";
import FirstDepositBonus from "./pages/Activity/Screens/FirstDepositeBonus/FirstDepositeBonus.tsx";
import NewHotOffer from "./pages/Activity/Screens/NewHotOffer/NewHotOffer.tsx";
import AviatorOffer from "./pages/Activity/Screens/NewHotOffer/AviaterOffer.tsx";
import YoutubeCreator from "./pages/Activity/Screens/NewHotOffer/YoutubeCreator.tsx";
import WinzoOffer from "./pages/Activity/Screens/NewHotOffer/WinzoOffer.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        {/*<Route path="/home" element={<Home />} />*/}
        <Route path="/register" element={<Register />} />
        <Route path="/forgot_reset" element={<ForgotPassword />} />
          <Route element={<AuthLayout />}>

              <Route path="/home" element={<Home />} />
              <Route path="/activity" element={<Activity />} />


              {/* <Route path="/wallet" element={<Wallet />} /> */}
              {/* <Route path="/account" element={<Account />} /> */}
          </Route>
          <Route path="/dailytask" element={<ActivityAward />} />
          <Route path="/rebate" element={<Rebate />} />
          <Route path="/jackpot" element={<SuperJackpot />} />
          <Route path="/newGift" element={<NewGift />} />
          <Route path="/redenvelopes" element={<Gift />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/first_deposit_bonus" element={<FirstDepositBonus />} />
          <Route path="/newHot" element={<NewHotOffer />} />
          <Route path="/aviator_betting_reward" element={<AviatorOffer />} />
          <Route path="/youtube" element={<YoutubeCreator />} />
          <Route path="/winzo" element={<WinzoOffer />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
