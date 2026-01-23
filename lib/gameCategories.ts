export type GameCategoryType = {
  title: string;
  gameId: string;
  games: { url: string; bg: string }[];
};

export const GAME_CATEGORIES: GameCategoryType[] = [
  {
    title: 'Popular',
    gameId: '1',
    games: [
      { url: '', bg: '/assets/png/bg-casino.png' },
      { url: '', bg: '/assets/png/bg-casino.png' },
      { url: '', bg: '/assets/png/bg-casino.png' },
      { url: '', bg: '/assets/png/bg-casino.png' },
      { url: '', bg: '/assets/png/bg-casino.png' },
    ],
  },
  {
    title: 'Lottery',
    gameId: '2',
    games: [
      { url: '', bg: '/assets/png/bg-casino.png' },
      { url: '', bg: '/assets/png/bg-casino.png' },
      { url: '', bg: '/assets/png/bg-casino.png' },
      { url: '', bg: '/assets/png/bg-casino.png' },
    ],
  },
  {
    title: 'Originals',
    gameId: '3',
    games: [
      { url: '', bg: '/assets/png/bg-casino.png' },
      { url: '', bg: '/assets/png/bg-casino.png' },
      { url: '', bg: '/assets/png/bg-casino.png' },
      { url: '', bg: '/assets/png/bg-casino.png' },
      { url: '', bg: '/assets/png/bg-casino.png' },
    ],
  },
  {
    title: 'Sports',
    gameId: '4',
    games: [
      { url: '', bg: '/assets/png/bg-casino.png' },
      { url: '', bg: '/assets/png/bg-casino.png' },
      { url: '', bg: '/assets/png/bg-casino.png' },
      { url: '', bg: '/assets/png/bg-casino.png' },
      { url: '', bg: '/assets/png/bg-casino.png' },
    ],
  },
  {
    title: 'Casino',
    gameId: '5',
    games: [
      { url: '', bg: '/assets/png/bg-casino.png' },
      { url: '', bg: '/assets/png/bg-casino.png' },
      { url: '', bg: '/assets/png/bg-casino.png' },
      { url: '', bg: '/assets/png/bg-casino.png' },
      { url: '', bg: '/assets/png/bg-casino.png' },
    ],
  },
  {
    title: 'Slots',
    gameId: '8',
    games: [
      { url: '', bg: '/assets/png/bg-casino.png' },
      { url: '', bg: '/assets/png/bg-casino.png' },
      { url: '', bg: '/assets/png/bg-casino.png' },
      { url: '', bg: '/assets/png/bg-casino.png' },
      { url: '', bg: '/assets/png/bg-casino.png' },
    ],
  },
];
