import "./home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Header from "../../common/Header/Header.tsx";
import { SoundOutlined } from "@ant-design/icons";
import {GAME_CATEGORIES} from "./helper/gameCategory.ts";

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
                                    Welcome to the Tevar Games! Greetings, Gamers and Enthusiasts!
                                    Register now and win.
                                </div>
                            ))}
                        </div>
                    </div>

                    <button className="notice-btn">Detail</button>
                </div>

                {/* CATEGORY */}
                <div className="category-grid-2">
                    {[
                        { t: "Popular", bg: "/assets/png/bg-popular.png" },
                        { t: "Lottery", bg: "/assets/png/bg-lottery.png" },
                    ].map((i) => (
                        <div
                            key={i.t}
                            className="category-card"
                            style={{ backgroundImage: `url(${i.bg})` }}
                        >
                            <div className="category-title category-title-top">{i.t}</div>
                        </div>
                    ))}
                </div>

                <div className="category-grid-3">
                    {[
                        { t: "Casino", bg: "/assets/png/bg-casino.png" },
                        { t: "Slots", bg: "/assets/png/bg-slot.png" },
                        { t: "Sports", bg: "/assets/png/bg-sport.png" },
                        { t: "Rummy", bg: "/assets/png/bg-rummy.png" },
                        { t: "Fishing", bg: "/assets/png/bg-fish.png" },
                        { t: "Original", bg: "/assets/png/bg-original.png" },
                    ].map((i) => (
                        <div
                            key={i.t}
                            className="category-card"
                            style={{ backgroundImage: `url(${i.bg})` }}
                        >
                            <div className="category-title category-title-bottom">{i.t}</div>
                        </div>
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

            </div>
        </div>
    );
};

export default Home;
