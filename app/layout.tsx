import './globals.css';
import { fontSans } from '@/lib/fonts';
import Header from '@/components/header/Header';
import { LightboxProvider } from '@/components/lightbox';
import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://darya-garmash.ru'),
  title: 'Дарья Гармаш — контент‑мейкер для beauty, врачей и клиник',
  description: 'Разработка, съёмка и монтаж Reels для вашего блога, которые поднимут вашу узнаваемость и продажи. Reels‑мейкер, который продюсирует и отвечает за результат.',
  openGraph: {
    title: 'Дарья Гармаш — контент‑мейкер для beauty, врачей и клиник',
    description: 'Разработка, съёмка и монтаж Reels для вашего блога, которые поднимут вашу узнаваемость и продажи. Reels‑мейкер, который продюсирует и отвечает за результат.',
    type: 'website',
    url: 'https://darya-garmash.ru',
    siteName: 'Дарья Гармаш',
    locale: 'ru_RU',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Дарья Гармаш — контент‑мейкер',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Дарья Гармаш — контент‑мейкер для beauty, врачей и клиник',
    description: 'Разработка, съёмка и монтаж Reels для вашего блога, которые поднимут вашу узнаваемость и продажи. Reels‑мейкер, который продюсирует и отвечает за результат.',
    images: ['/og-image.jpg'],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#ffffff' },
  ],
  colorScheme: 'light dark',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={fontSans.variable} suppressHydrationWarning>
      <body>
        <LightboxProvider>
          <Header />
          {children}
        </LightboxProvider>
      </body>
    </html>
  );
}
