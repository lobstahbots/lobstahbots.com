import styles from "./navbar.module.css";
import Link from "next/link";

export default function Navbar () {
  return (
    <header className={styles.navbar}>
      <nav>
        <div className = {styles.logo}>
          <a className = {styles.title}>Lobstah Bots</a>
        </div>
        <div className = {styles.menu}>
          <a href = "/" className = {styles.menuOption}>Home</a>
          <a href = "/history" className = {styles.menuOption}>History</a>
          <a href = "/team" className = {styles.menuOption}>Our Team</a>
          <a href = "/gallery" className = {styles.menuOption}>Gallery</a>
          <a href = "/contact" className = {styles.menuOption}>Contact</a>
          <a href = "/newsletter" className = {styles.menuOption}>Newsletter</a>
          <a href = "/sponsors" className = {styles.menuOption}>Sponsors</a>
        </div>
      </nav>
    </header>
  );
}
