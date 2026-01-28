import BottomNavbar from '@/components/BottomNavbar/BottomNavbar';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="w-[10rem] min-h-screen overflow-y-scroll"
      style={{ backgroundColor: 'var(--bg_color_L1)', color: 'var(--text_color_L1)' }}
    >
      {children}
      <BottomNavbar />
    </div>
  );
}
