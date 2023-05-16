import { ReactNode } from "react";
import styles from "./page-title.module.css";

interface PageTitleProps {
  children: ReactNode;
}

export default function PageTitle ({ children }: PageTitleProps) {
  return <header className="section">
    <h1 className={styles.pageTitle}>{children}</h1>
  </header>;
}
