
import React from "react";
import Footer from "./footer";
import styles from "./layout.module.css";
import Navbar from "./navbar";

export default function App ({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.layout}>
      <Navbar />
      <div className={styles.content}>
        { children }
      </div>
      <Footer />
    </div>
  );
}
