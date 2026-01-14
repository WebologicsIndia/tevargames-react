import "./activity.css";

const Activity = () => {
    return (
        <div className="activity-page">
            {/* HEADER */}
            <div className="activity-header">
                <h1>Activity</h1>
                <p>
                    Please remember to follow the event page <br />
                    We will launch user feedback activities from time to time
                </p>
            </div>

            {/* ICON GRID */}
            <div className="activity-icons">
                <div className="icon-item">
                    <div className="icon-box pink">🏅</div>
                    <span>Activity Award</span>
                </div>

                <div className="icon-item">
                    <div className="icon-box orange">🎲</div>
                    <span>Betting rebate</span>
                </div>

                <div className="icon-item">
                    <div className="icon-box green">🏆</div>
                    <span>Super Jackpot</span>
                </div>

                <div className="icon-item">
                    <div className="icon-box purple">🎁</div>
                    <span>New member gift package</span>
                </div>
            </div>

            {/* CARDS */}
            <div className="activity-cards">
                <div className="activity-card">
                    <div className="card-image">🧧</div>
                    <div className="card-content">
                        <h3>Gifts</h3>
                        <p>Enter the redemption code to receive gift rewards</p>
                    </div>
                </div>

                <div className="activity-card">
                    <div className="card-image">📅</div>
                    <div className="card-content">
                        <h3>Attendance bonus</h3>
                        <p>
                            The more consecutive days you sign in, the higher the reward will be.
                        </p>
                    </div>
                </div>
            </div>

            {/* BANNER */}
            <div className="activity-banner">
                <div className="banner-top">
                    <h2>EXTRA 100%</h2>
                    <p>ON FIRST RECHARGE</p>
                    <span>ONE-TIME ONLY!</span>
                </div>

                <div className="banner-bottom">
                    💰 <strong>First Deposit Bonus</strong> 💰
                </div>
            </div>
        </div>
    );
};

export default Activity;
