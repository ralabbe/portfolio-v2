import LocalFont from "next/font/local";
import "./globals.css";
import { ReCaptchaProvider } from "next-recaptcha-v3";
import Footer from "@/components/Footer";
import '@fortawesome/fontawesome-svg-core/styles.css';

const BarlowFont = LocalFont({
  src: [
    {
      path: 'fonts/Barlow-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: 'fonts/Barlow-Medium.ttf',
      weight: '500',
    },
    {
      path: 'fonts/Barlow-Bold.ttf',
      weight: '700',
      style: 'bold',
    }
  ],
  subsets: ['latin']
});

const BarlowCondensedFont = LocalFont({
  src: [
    {
      path: 'fonts/BarlowCondensed-Bold.ttf',
    }
  ],
  variable: '--font-barlow-condensed',
  subsets: ['latin']
});

export const metadata = {
  title: "Rafael Labbe's Portfolio",
  description: "A front end web engineer with experience in JavaScript, React, Next.js, HTML, CSS, WordPress, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <body className={`${BarlowFont.className} ${BarlowCondensedFont.variable}`}>
        <ReCaptchaProvider>
          {children}
          <Footer />
        </ReCaptchaProvider>
      </body>
    </html>
  );
}
