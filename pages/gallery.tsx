import styles from "./gallery.module.css";
import Image from "next/image";
import lobstahbots from "../images/lobstahbots.png";

export default function Gallery () {
  return (
    <div>
      <div className={styles.gallery}>
        <Image src={lobstahbots} alt="default img" width = "500" height = "500"/>
        <div className={styles.desc}>Add a description of the image here</div>
      </div>

      <div className={styles.gallery}>
        <Image src={lobstahbots} alt="default img" width = "500" height = "500"/>
        <div className={styles.desc}>Add a description of the image here</div>
      </div>

      <div className={styles.gallery}>
        <Image src={lobstahbots} alt="default img" width = "500" height = "500"/>
        <div className={styles.desc}>Add a description of the image here</div>
      </div>

      <div className={styles.gallery}>
        <Image src={lobstahbots} alt = "default img" width = "500" height = "500"/>
        <div className={styles.desc}>Add a description of the image here</div>
      </div>
    </div>
  );
}
