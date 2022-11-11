import styles from "./gallery.module.css";
import Image from "next/image";

export default function Gallery () {
  return(
    <div> 
      <div className={styles.gallery}>
          <Image src="/images/lobstahbots.png" alt="Cinque Terre" width="600" height="400"/>
        <div className={styles.desc}>Add a description of the image here</div>
      </div>

      <div className={styles.gallery}>
          <Image src="/images/lobstahbots.png" alt="Forest" width="600" height="400"/>
        <div className={styles.desc}>Add a description of the image here</div>
      </div>

      <div className={styles.gallery}>
          <Image src="/images/lobstahbots.png" alt="Northern Lights" width="600" height="400"/>
        <div className={styles.desc}>Add a description of the image here</div>
      </div>

      <div className={styles.gallery}>
          <Image src="/images/lobstahbots.png" alt="Mountains" width="600" height="400"/>
        <div className={styles.desc}>Add a description of the image here</div>
      </div>
    </div>
  );
}