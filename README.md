# Tevar Games - Next.js

A mobile-first gaming platform built with Next.js, React, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3 + CSS Variables
- **UI Library**: Ant Design 6
- **Carousel**: Swiper 12

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The app runs at [http://localhost:3000](http://localhost:3000)

## Project Structure

```
tevargames-react/
├── app/                     # Next.js App Router pages
│   ├── globals.css          # Global styles with CSS variables
│   ├── layout.tsx           # Root layout with providers
│   ├── providers.tsx        # Ant Design ConfigProvider
│   ├── page1.tsx             # Root redirect to /login
│   ├── login/               # Login page
│   ├── register/            # Register page
│   ├── forgot_reset/        # Forgot password page
│   ├── (main)/              # Route group with BottomNavbar
│   │   ├── layout.tsx       # Layout with BottomNavbar
│   │   ├── home/            # Home page
|   |   ├── promotion/           # Promotion page   
│   │   └── activity/        # Activity page
│   ├── dailytask/           # Activity Award page
│   ├── rebate/              # Betting Rebate page
│   ├── jackpot/             # Super Jackpot page
│   ├── newGift/             # New Member Gift page
│   ├── redenvelopes/        # Gifts page
│   ├── attendance/          # Attendance Bonus page
│   ├── first_deposit_bonus/ # First Deposit Bonus page
│   ├── newHot/              # New Hot Offer page
│   ├── aviator_betting_reward/ # Aviator Betting page
│   ├── youtube/             # Youtube Creator page
│   ├── winzo/               # Winzo Offer page
│   ├── wallet/              # Wallet page
│   └── account/             # Account page
├── components/              # Shared components
│   ├── BottomNavbar/        # Bottom navigation bar
│   ├── Header/              # App header
│   ├── NotificationPopup/   # Notification modal
│   ├── EarningChart/        # Earnings leaderboard
│   ├── SettingRow.tsx       # Settings row component
│   └── ProviderCard.tsx     # Provider card component
├── lib/                     # Utilities and constants
│   └── gameCategories.ts    # Game categories data
└── public/                  # Static assets
    ├── assets/              # Images, icons, banners
    └── whitehjj.png         # App logo
```

## Routes

| Route           | Description |
|-----------------|-------------|
| `/`             | Redirects to `/login` |
| `/login`        | User login |
| `/register`     | User registration |
| `/forgot_reset` | Password recovery |
| `/home`         | Main home page with games |
| `/activity`     | Activity promotions |
| `/promotion`    | Activity promotions |
| `/dailytask`    | Daily task rewards |
| `/rebate`       | Betting rebate |
| `/jackpot`      | Super jackpot |
| `/attendance`   | Daily check-in bonus |
| `/promotion`    | Promotions |
| `/wallet`       | User wallet |
| `/account`      | User account |

## Migration from Vite + React Router

This project was migrated from a Vite + React Router setup to Next.js App Router:

- **Routing**: React Router `BrowserRouter` -> Next.js file-based routing
- **Navigation**: `useNavigate()` -> `useRouter()` from `next/navigation`
- **Location**: `useLocation()` -> `usePathname()` from `next/navigation`
- **Layouts**: React Router `<Outlet />` -> Next.js `layout.tsx` with `{children}`
- **Tailwind**: v4 -> v3 (updated syntax for CSS variables)

## CSS Variables

The app uses CSS variables for theming defined in `app/globals.css`:

```css
:root {
  --main-color: #FFD700;
  --bg_color_L1: #000000;
  --text_color_L1: #FFD700;
  --text_color_L2: #ACAFC2;
  /* ... and more */
}
```

## Mobile-First Design

The app is designed for mobile with a fixed width of `10rem` (400px at 40px root font-size). The viewport is set to prevent user scaling for a native app-like experience.
