import './globals.css';
import { Outfit, Lato } from 'next/font/google';
import NavBar from '../components/mainLayout/NavBar';
import Footer from '../components/mainLayout/Footer';

const outfit = Outfit({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

const lato = Lato({
  weight: ['100', '300', '400', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'GEDA Dashboard',
  description: 'Gender & Environment Data Alliance Dashboard',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.className} ${lato.className}`}>
      <body className="min-h-screen flex flex-col">
        {/* navbar for home page */}
        <header>
          <NavBar />
        </header>
        {/* main content */}
        <main className="flex-grow">{children}</main>

        {/* footer */}
        <Footer />
      </body>
    </html>
  );
}
