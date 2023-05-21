import type { ReactNode } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import "./global.css";
import styles from "./layout.module.css";

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
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
