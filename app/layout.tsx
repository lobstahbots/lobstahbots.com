import Footer from "../components/footer";
import Navbar from "../components/navbar";
import "../styles/globals.css";
import styles from "./styles.module.css";
import React from "react";

export default function RootLayout ({ children }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
