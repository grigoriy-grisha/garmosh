import './globals.css';
import { fontSans } from '@/lib/fonts';
import Header from '@/components/header/Header';
import { LightboxProvider } from '@/components/lightbox';
import type { Metadata, Viewport } from 'next';
import Script from 'next/script';

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

        {/* Yandex.Metrika counter */}
        <Script
          id="yandex-metrika"
          strategy="afterInteractive"
        >{`(function(m,e,t,r,i,k,a){
            m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
        })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=106198229', 'ym');

        ym(106198229, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});`}</Script>
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/106198229"
              style={{ position: 'absolute', left: '-9999px' }}
              alt=""
            />
          </div>
        </noscript>
        {/* /Yandex.Metrika counter */}
      </body>
    </html>
  );
}
