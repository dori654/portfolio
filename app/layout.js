import { Outfit } from "next/font/google";
import "./globals.css";

// Chillax (Hum's face) loads from Fontshare below; Outfit stands in until it has.
const display = Outfit({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--nf-display",
  display: "swap",
});

export const metadata = {
  title: "Dori Fourer | Software Engineer",
  description: "Software Engineer and DevOps Specialist. Building scalable systems from frontend to infrastructure.",
};

// Applies the saved theme before first paint to avoid a flash. Defaults to light.
const themeScript = `try{var t=localStorage.getItem("theme");document.documentElement.dataset.theme=t==="dark"?"dark":"light"}catch(e){document.documentElement.dataset.theme="light"}`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
      className={display.variable}
    >
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link href="https://api.fontshare.com/v2/css?f[]=chillax@500,600&display=swap" rel="stylesheet" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
