import styles from "./gallery.module.css";
import Image from "next/image";

export default function Gallery () {
  return (
    <div> 
      <div className={styles.gallery}>
          <Image src="" alt="Cinque Terre" width="600" height="400"/>
        <div className={styles.desc}>Add a description of the image here</div>
      </div>

      <div className={styles.gallery}>
          <Image src="" alt="Forest" width="600" height="400"/>
        <div className={styles.desc}>Add a description of the image here</div>
      </div>

      <div className={styles.gallery}>
          <Image src="" alt="Northern Lights" width="600" height="400"/>
        <div className={styles.desc}>Add a description of the image here</div>
      </div>

      <div className={styles.gallery}>
          <Image src="" alt="Mountains" width="600" height="400"/>
        <div className={styles.desc}>Add a description of the image here</div>
      </div>
    </div>
  );
}
