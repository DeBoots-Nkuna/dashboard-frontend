import './globals.css';

export const metadata = {
  title: 'GEDA Dashboard',
  description: 'Indicators dashboard',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
