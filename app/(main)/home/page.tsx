'use client';

import './home.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Header from '@/components/Header/Header';
import {
  BellOutlined,
  BookOutlined,
  CustomerServiceOutlined,
  GlobalOutlined,
  PhoneFilled,
  SoundOutlined,
} from '@ant-design/icons';
import { GAME_CATEGORIES } from '@/lib/gameCategories';
import EarningsChart from '@/components/EarningChart/EarningChart';
import SettingRow from '@/components/SettingRow';
import ProviderCard from '@/components/ProviderCard';
import NotificationPopup from '@/components/NotificationPopup/NotificationPopup';
import { useState } from 'react';

const winners = [
  {
    name: 'Mem***ROQ',
    avatar: '/assets/avatars/avatar_1.png',
    game: 'https://ossimg.tirangaagent.com/Tiranga/vendorlogo/vendorlogo_20240102161956p963.png',
    amount: 'Rs 40,000.00',
  },
  {
    name: 'Mem***MWB',
    avatar: '/assets/avatars/avatar_2.png',
    game: 'https://ossimg.tirangaagent.com/Tiranga/vendorlogo/vendorlogo_20231026192554xfnm.png',
    amount: 'Rs 80.00',
  },
  {
    name: 'Mem***JHU',
    avatar: '/assets/avatars/avatar_3.png',
    game: 'https://ossimg.tirangaagent.com/Tiranga/vendorlogo/vendorlogo_20240102161956p963.png',
    amount: 'Rs 200.00',
  },
  {
    name: 'Mem***NAJ',
    avatar: '/assets/avatars/avatar_4.png',
    game: 'https://ossimg.tirangaagent.com/Tiranga/vendorlogo/vendorlogo_202310261925122stc.png',
    amount: 'Rs 200.00',
  },
  {
    name: 'Mem***ROA',
    avatar: '/assets/avatars/avatar_5.png',
    game: 'https://ossimg.tirangaagent.com/Tiranga/vendorlogo/vendorlogo_20240102161956p963.png',
    amount: 'Rs 200.00',
  },
  {
    name: 'Mem***QHM',
    avatar: '/assets/avatars/avatar_6.png',
    game: 'https://ossimg.tirangaagent.com/Tiranga/vendorlogo/vendorlogo_202310261925122stc.png',
    amount: 'Rs 200.00',
  },
];

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);

  const scrollToSection = (sectionName: string) => {
    const element = document.getElementById(`section-${sectionName.toLowerCase()}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <div className="home-container">
        <div className="home-content">
          <Header />

          {/* BANNER */}
          <div className="home-banner-wrapper">
            <Swiper
              modules={[Pagination, Autoplay]}
              autoplay={{ delay: 3000 }}
              pagination={{ clickable: true }}
              loop
              className="home-banner"
            >
              {[1, 2, 3, 4].map((n) => (
                <SwiperSlide key={n}>
                  <img
                    alt={`${n}.jpg`}
                    src={`/assets/banners/${n}.${n === 3 || n === 4 ? 'jpg' : 'png'}`}
                    className="home-banner-img"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* NOTICE */}
          <div className="notice-bar">
            <SoundOutlined className="notice-icon" />

            <div className="notice-text-wrapper">
              <div className="animate-marquee-vertical">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="notice-text">
                    Welcome to the Tevar Games! Greetings, Gamers and Enthusiasts! The Tevar Games is more than just a
                    platform for gaming. We invite you to join us, you&apos;ll find a variety of games, promo, bonus,
                    luxury gold awards, Register now and win.
                  </div>
                ))}
              </div>
            </div>

            <button className="notice-btn">Detail</button>
          </div>

          {/* CATEGORY */}
          <div className="category-grid-2">
            {[
              {
                t: 'Popular',
                bg: '/assets/png/bg-popular.png',
                icon: 'https://ossimg.tirangaagent.com/Tiranga/gamecategory/gamecategory_20240221154444kutg.png',
              },
              {
                t: 'Lottery',
                bg: '/assets/png/bg-lottery.png',
                icon: 'https://ossimg.tirangaagent.com/Tiranga/gamecategory/gamecategory_20240221154540veqj.png',
              },
            ].map((i) => (
              <div
                key={i.t}
                className="category-card"
                style={{ backgroundImage: `url(${i.bg})` }}
                onClick={() => scrollToSection(i.t)}
              >
                <img alt={i.t} className="category-icon" src={i.icon} />
                <div className="category-title category-title-top">{i.t}</div>
              </div>
            ))}
          </div>

          <div className="category-grid-3">
            {[
              {
                t: 'Casino',
                bg: '/assets/png/bg-casino.png',
                icon: 'https://ossimg.tirangaagent.com/Tiranga/gamecategory/gamecategory_20240529195514q4uq.png',
              },
              {
                t: 'Slots',
                bg: '/assets/png/bg-slot.png',
                icon: 'https://ossimg.tirangaagent.com/Tiranga/gamecategory/gamecategory_20240221154558lshk.png',
              },
              {
                t: 'Sports',
                bg: '/assets/png/bg-sport.png',
                icon: 'https://ossimg.tirangaagent.com/Tiranga/gamecategory/gamecategory_20240221154454akso.png',
              },
              {
                t: 'Rummy',
                bg: '/assets/png/bg-rummy.png',
                icon: 'https://ossimg.tirangaagent.com/Tiranga/gamecategory/gamecategory_202404151616441889.png',
              },
              {
                t: 'Fishing',
                bg: '/assets/png/bg-fish.png',
                icon: 'https://ossimg.tirangaagent.com/Tiranga/gamecategory/gamecategory_20240221164829vcfa.png',
              },
              {
                t: 'Original',
                bg: '/assets/png/bg-original.png',
                icon: 'https://ossimg.tirangaagent.com/Tiranga/gamecategory/gamecategory_20240415161436vabi.png',
              },
            ].map((i, index) => (
              <div
                key={i.t}
                className="category-card"
                style={{ backgroundImage: `url(${i.bg})` }}
                onClick={() => scrollToSection(i.t)}
              >
                <img alt={i.t} className="category-icon" src={i.icon} />
                <div className={`category-title ${index > 2 ? 'category-title-bottom' : 'category-title-top1'}`}>
                  {i.t}
                </div>
              </div>
            ))}
          </div>

          {/* POPULAR */}
          {GAME_CATEGORIES.map((game) => (
            <div key={game.gameId} id={`section-${game.title.toLowerCase()}`} className="game-section">
              <div className="section-title">
                <div className="section-bar" />
                <span className="section-text">{game.title}</span>
              </div>
              <div className="games-grid">
                {game.games.map((i, idx) => (
                  <div key={`${game.title}[${idx}]`} className="game-block" style={{ backgroundImage: `url(${i.bg})` }} />
                ))}
              </div>
            </div>
          ))}

          <div className="recent-winners">
            {winners.map((item, index) => (
              <div key={index} className="winner-item">
                {/* LEFT */}
                <div className="winner-left w-[40%]">
                  <img src={item.avatar} className="winner-avatar" alt={item.name} />
                  <span className="winner-name">{item.name}</span>
                </div>

                {/* CENTER */}
                <div className="winner-left">
                  <div className="winner-game">
                    <img alt={item.name} src={item.game} className="winner-game-img" />
                  </div>

                  {/* RIGHT */}
                  <div className="winner-right">
                    <span className="winner-amount">Receive {item.amount}</span>
                    <span className="winner-label">Winning amount</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <EarningsChart />

          <div className="flex flex-col mt-[0.83333rem] gap-[0.3rem]">
            {/* HEADER */}
            <div className="grid grid-cols-3 gap-[0.2rem] items-center px-[0.53333rem] mb-[0.3rem]">
              <img src="/whitehjj.png" className="h-[1.5rem] justify-self-center" alt="logo" />
              <img src="/assets/svg/adult18.svg" className="h-[1rem] justify-self-center" alt="18+" />
              <div
                className="h-[1rem] w-[1rem] rounded-full flex items-center justify-center justify-self-center"
                style={{ backgroundColor: 'var(--text_color_L5)' }}
              >
                <PhoneFilled className="text-white text-[0.5rem]" />
              </div>
            </div>

            {/* PROVIDERS */}
            <div className="grid grid-cols-3 gap-[0.2rem] px-[0.53333rem]">
              <ProviderCard icon="/assets/svg/companyLogo_1.svg" />
              <ProviderCard icon="/assets/svg/companyLogo_2.svg" />
              <ProviderCard icon="/assets/svg/companyLogo_3.svg" />
              <ProviderCard icon="/assets/svg/companyLogo_4.svg" />
              <ProviderCard icon="/assets/svg/companyLogo_5.svg" />
              <ProviderCard icon="/assets/svg/companyLogo_6.svg" />
            </div>

            {/* CONTENT */}
            <div
              className="mt-[0.5rem] space-y-4 text-[0.32rem] leading-relaxed px-[0.53333rem]"
              style={{ color: 'var(--van-checkbox-label-color)' }}
            >
              <p>
                ◆ The platform advocates fairness, justice, and openness. We mainly operate fair lottery, blockchain
                games, live casinos, and slot machine games.
              </p>

              <p>
                ◆ Tevar Games works with more than 10,000 online live game dealers and slot games, all of which are
                verified fair games.
              </p>

              <p>◆ Tevar Games supports fast deposit and withdrawal, and looks forward to your visit.</p>

              <p style={{ color: 'var(--text_color_L5)' }}>Gambling can be addictive, please play rationally.</p>

              <p style={{ color: 'var(--text_color_L5)' }}>
                Tevar Games only accepts customers above the age of 18.
              </p>
            </div>

            {/* SETTINGS */}
            <div className="mt-8 px-[0.53333rem]">
              <SettingRow icon={<GlobalOutlined />} label="Language" />
              <SettingRow icon={<BellOutlined />} label="Notification" />
              <SettingRow icon={<CustomerServiceOutlined />} label="24/7 Customer service" />
              <SettingRow icon={<BookOutlined />} label="Beginner's Guide" />
              <SettingRow icon={<BookOutlined />} label="About us" />
            </div>
          </div>
        </div>
      </div>
      <NotificationPopup open={showPopup} onClose={() => setShowPopup(false)} />
    </>
  );
};

export default Home;
