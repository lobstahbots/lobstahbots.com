import styles from "./overlay.module.css";
import { ReactNode } from "react";

export default function Overlay ({ background, content }: {background: ReactNode, content: ReactNode}) {
  return (
    <div className = {styles.overlayContainer}>
      <div className = {styles.background}>{background}</div>
      <div className = {styles.overlay}>{content}</div>
    </div>
  );
}
