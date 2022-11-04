import styles from '../styles/Home.module.css'
import Image from 'next/image'
import react from "react" 

export default function Footer() {
    return (
      <div className={styles.footer}>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </div>
    )
} 