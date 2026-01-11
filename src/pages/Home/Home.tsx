import "./home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import Header from "../../common/Header/Header.tsx";
import { SoundOutlined } from "@ant-design/icons";
import {GAME_CATEGORIES} from "./helper/gameCategory.ts";

const winners = [
    {
        name: "Mem***ROQ",
        avatar: "/assets/avatars/avatar_1.png",
        game: "https://ossimg.tirangaagent.com/Tiranga/vendorlogo/vendorlogo_20240102161956p963.png",
        amount: "Rs 40,000.00",
    },
    {
        name: "Mem***MWB",
        avatar: "/assets/avatars/avatar_2.png",
        game: "https://ossimg.tirangaagent.com/Tiranga/vendorlogo/vendorlogo_20231026192554xfnm.png",
        amount: "Rs 80.00",
    },
    {
        name: "Mem***JHU",
        avatar: "/assets/avatars/avatar_3.png",
        game: "https://ossimg.tirangaagent.com/Tiranga/vendorlogo/vendorlogo_20240102161956p963.png",
        amount: "Rs 200.00",
    },
    {
        name: "Mem***NAJ",
        avatar: "/assets/avatars/avatar_4.png",
        game: "https://ossimg.tirangaagent.com/Tiranga/vendorlogo/vendorlogo_202310261925122stc.png",
        amount: "Rs 200.00",
    },
    {
        name: "Mem***ROA",
        avatar: "/assets/avatars/avatar_5.png",
        game: "https://ossimg.tirangaagent.com/Tiranga/vendorlogo/vendorlogo_20240102161956p963.png",
        amount: "Rs 200.00",
    },
    {
        name: "Mem***QHM",
        avatar: "/assets/avatars/avatar_6.png",
        game: "https://ossimg.tirangaagent.com/Tiranga/vendorlogo/vendorlogo_202310261925122stc.png",
        amount: "Rs 200.00",
    },
];

const Home = () => {
    return (
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
                                    src={`/assets/banners/${n}.${n === 3 || n === 4 ? "jpg" : "png"}`}
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
                                    Welcome to the Tevar Games! Greetings, Gamers and Enthusiasts! The Tevar Games is more than just a platform for gaming.
                                    We invite you to join us, you'll find a variety of games, promo, bonus, luxury gold awards, Register now and win.
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
                            t: "Popular",
                            bg: "/assets/png/bg-popular.png" ,
                            icon: "https://ossimg.tirangaagent.com/Tiranga/gamecategory/gamecategory_20240221154444kutg.png"
                        },
                        {
                            t: "Lottery",
                            bg: "/assets/png/bg-lottery.png" ,
                            icon: "https://ossimg.tirangaagent.com/Tiranga/gamecategory/gamecategory_20240221154540veqj.png"
                        },
                    ].map((i) => (
                        <div
                            key={i.t}
                            className="category-card"
                            style={{ backgroundImage: `url(${i.bg})` }}
                        >
                            <img
                                alt={i.t}
                                className="category-icon"
                                src={i.icon}
                            />
                            <div className="category-title category-title-top">{i.t}</div>
                        </div>
                    ))}
                </div>

                <div className="category-grid-3">
                    {[
                        {
                            t: "Casino",
                            bg: "/assets/png/bg-casino.png" ,
                            icon: "https://ossimg.tirangaagent.com/Tiranga/gamecategory/gamecategory_20240529195514q4uq.png"
                        },
                        {
                            t: "Slots",
                            bg: "/assets/png/bg-slot.png",
                            icon: "https://ossimg.tirangaagent.com/Tiranga/gamecategory/gamecategory_20240221154558lshk.png"
                        },
                        {
                            t: "Sports",
                            bg: "/assets/png/bg-sport.png" ,
                            icon: "https://ossimg.tirangaagent.com/Tiranga/gamecategory/gamecategory_20240221154454akso.png"
                        },
                        {
                            t: "Rummy",
                            bg: "/assets/png/bg-rummy.png",
                            icon: "https://ossimg.tirangaagent.com/Tiranga/gamecategory/gamecategory_202404151616441889.png"
                        },
                        {
                            t: "Fishing",
                            bg: "/assets/png/bg-fish.png",
                            icon: "https://ossimg.tirangaagent.com/Tiranga/gamecategory/gamecategory_20240221164829vcfa.png"
                        },
                        {
                            t: "Original",
                            bg: "/assets/png/bg-original.png",
                            icon: "https://ossimg.tirangaagent.com/Tiranga/gamecategory/gamecategory_20240415161436vabi.png\n"
                        },
                    ].map((i, index) => (
                        <div
                            key={i.t}
                            className="category-card"
                            style={{ backgroundImage: `url(${i.bg})` }}
                        >
                            <img
                                alt={i.t}
                                className="category-icon"
                                src={i.icon}
                            />
                            <div
                                className={`category-title ${
                                    index > 2 ? "category-title-bottom" : "category-title-top1"
                                }`}
                            >
                                {i.t}
                            </div>                        </div>
                    ))}
                </div>

                {/* POPULAR */}
                { GAME_CATEGORIES.map((game) => (
                    <>
                    <div className="section-title">
                        <div className="section-bar" />
                        <span className="section-text">{game.title}</span>
                    </div>
                        <div className="games-grid">
                            {game.games.map((i) => (
                                <div
                                    key={`${game.title}[${i}]`}
                                    className="game-block"
                                    style={{ backgroundImage: `url(${i.bg})` }}
                                >
                                    {/*<div className="category-title category-title-bottom">{i.t}</div>*/}
                                </div>
                            ))}
                        </div>

                    </>
                    ))}
                <div className="recent-winners">
                    {winners.map((item, index) => (
                        <div key={index} className="winner-item">
                            {/* LEFT */}
                            <div className="winner-left w-[40%]">
                                <img src={item.avatar} className="winner-avatar" />
                                <span className="winner-name">{item.name}</span>
                            </div>

                            {/* CENTER */}
                            <div className={"winner-left"}>
                            <div className="winner-game">
                                <img alt={item.name} src={item.game} className={"winner-game-img" } />
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

            </div>
        </div>
    );
};

export default Home;
