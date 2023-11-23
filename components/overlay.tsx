import styles from "./overlay.module.css";
import { ReactNode } from "react";

export default function Overlay ({ children }: {children: ReactNode}) {
  return (
    <div className={styles.overlayContainer}>
      {children}
    </div>
  );
}
