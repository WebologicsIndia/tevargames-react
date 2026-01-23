'use client';

import './earningChart.css';

const podium = [
  {
    rank: 1,
    order: 2,
    name: 'Mem***GVT',
    amount: 'Rs. 12,505,260.13',
    avatar: '/assets/avatars/avatar_2.png',
    type: 'first',
    crown: '/assets/icons/crown-gold.png',
    border: '/assets/icons/border-gold.png',
    rankCard: '/assets/icons/rankCard-gold.png',
  },
  {
    rank: 2,
    order: 1,
    name: 'Mem***NNB',
    amount: 'Rs. 4,172,283.14',
    avatar: '/assets/avatars/avatar_5.png',
    type: 'second',
    crown: '/assets/icons/crown-silver.png',
    border: '/assets/icons/border-silver.png',
    rankCard: '/assets/icons/rankCard-silver.png',
  },
  {
    rank: 3,
    order: 3,
    name: 'Mem***TYB',
    amount: 'Rs. 1,514,144.00',
    avatar: '/assets/avatars/avatar_3.png',
    type: 'third',
    crown: '/assets/icons/crown-bronze.png',
    border: '/assets/icons/border-bronze.png',
    rankCard: '/assets/icons/rankCard-bronze.png',
  },
];

const others = [
  {
    rank: 4,
    name: 'Mem***FTL',
    amount: 'Rs1,164,233,891.66',
    avatar: '/assets/avatars/avatar_6.png',
  },
  {
    rank: 5,
    name: 'Mem***XOA',
    amount: 'Rs903,077,879.20',
    avatar: '/assets/avatars/avatar_7.png',
  },
];

const EarningsChart = () => {
  return (
    <div className="earnings">
      {/* TITLE */}
      <div className="earnings-title">
        <span className="earnings-dot" />
        <span>Today&apos;s earnings chart</span>
      </div>

      <div className="podium">
        {podium.map((p) => (
          <div
            key={p.rank}
            className="flex flex-col items-center translate-y-[-0.7rem] justify-center"
            style={{ order: p.order }}
          >
            <div
              className="relative h-[1.44rem] w-[1.44rem] rounded-full flex items-center justify-center"
              style={{
                backgroundImage: `url(${p.border})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <img alt={`${p.rank}`} src={p.avatar} className="podium-avatar" />
              <img
                alt={`${p.rank}`}
                src={p.crown}
                className="absolute h-[1.13rem] top-[-0.6rem] translate-x-[-0.6rem]"
              />
              <img src={p.rankCard} alt="" className="absolute bottom-[-0.2rem]" />
            </div>
            <div className="podium-name">{p.name}</div>
            <div className="podium-amount">{p.amount}</div>
          </div>
        ))}
      </div>

      <div>
        {others.map((u) => (
          <div key={u.rank} className="earnings-row">
            <span className="earnings-rank">{u.rank}</span>
            <img src={u.avatar} className="earnings-avatar" alt={u.name} />
            <span className="earnings-name">{u.name}</span>
            <span className="earnings-amount-pill">{u.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EarningsChart;
