import { Host_Grotesk, Atkinson_Hyperlegible_Mono } from "next/font/google";
import "./globals.css";

const display = Host_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--nf-display",
  display: "swap",
});

const mono = Atkinson_Hyperlegible_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--nf-mono",
  display: "swap",
});

export const metadata = {
  title: "Dori Fourer | Software Engineer",
  description: "Software Engineer and DevOps Specialist. Building scalable systems from frontend to infrastructure.",
};

// Applies the saved theme before first paint to avoid a flash. Defaults to dark.
const themeScript = `try{var t=localStorage.getItem("theme");document.documentElement.dataset.theme=t==="light"?"light":"dark"}catch(e){document.documentElement.dataset.theme="dark"}`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${display.variable} ${mono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
