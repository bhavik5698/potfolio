import { Geist, Geist_Mono } from "next/font/google";
import "../../public/assets/css/styles.css";
import Script from "next/script";
import "./globals.css";
import "tailwindcss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bhavik Brahmbhatt",
  description: "Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css"
          rel="stylesheet"
        />
        <title>Bhavik Brahmbhatt</title>
      </head>
      <body
        style={{ height: "100%" }}
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="l-header">
          <nav className="nav bd-grid">
            <div>
              <a href="#" className="nav__logo">Bhavik</a>
            </div>

            <div className="nav__menu" id="nav-menu">
              <ul className="nav__list">
                <li className="nav__item"><a href="#home" className="nav__link active-link">Home</a></li>
                <li className="nav__item"><a href="#about" className="nav__link">About</a></li>
                <li className="nav__item"><a href="#skills" className="nav__link">Skills</a></li>
                <li className="nav__item"><a href="#work" className="nav__link">Work</a></li>
                <li className="nav__item"><a href="#contact" className="nav__link">Contact</a></li>
              </ul>
            </div>

            <div className="nav__toggle" id="nav-toggle">
              <i className='bx bx-menu'></i>
            </div>
          </nav>
        </header>
        {children}
        <Script src="https://unpkg.com/scrollreveal" strategy="beforeInteractive" />
        <Script src="/assets/js/main.js" strategy="beforeInteractive" />
      </body>
    </html>
  );
}
