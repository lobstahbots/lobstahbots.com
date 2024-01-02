import type { ReactNode } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import "./global.css";
import styles from "./layout.module.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  metadataBase: new URL("https://lobstahbots.com"),
  title: {
    template: "%s | 246 Lobstah Bots",
    default: "Lobstah Bots | 246",
  },
  description: "The official website of Lobstah Bots, Boston University Academy's FIRST Robotics Competition team.",
  alternates: {
    canonical: "/",
  },
  themeColor: "#c40000",
};

export default function App ({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/blh0nax.css" />
      </head>
      <body>
        <div className={styles.layout}>
          <Navbar />
          <div className={styles.content}>
            {children}
            <Analytics />
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
