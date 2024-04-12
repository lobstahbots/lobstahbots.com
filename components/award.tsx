import { StaticImageData } from "next/image";
import styles from "./award.module.css";
import Image from "next-image-export-optimizer";

export interface AwardProps {
  number: string;
  labels: string[];
  description: string;
  image: string | StaticImageData;
  alt: string;
  imageLeft?: boolean;
}

export const Award = (props: AwardProps) => {
  if (!props.imageLeft) return (
    <div className={`container cols1_1 ${styles.stat}`}>
      <div className={styles.left_award}>
        <div className={styles.number}>{props.number}</div>
        {props.labels.map((label, index) => <div key={index} className={styles.label}>{label}</div>)}
      </div>
      <div className={styles.left_side_border}>
        <Image className={`responsive-image brand-border ${styles.awardPhoto}`} src={props.image} alt={props.alt} />
        <p className={styles.awardText}>{props.description}</p>
      </div>
    </div>
  );
  return (
    <div className={`container cols1_1 ${styles.stat}`}>
      <div className={styles.right_side_border}>
        <Image className={`responsive-image brand-border ${styles.awardPhoto}`} src={props.image} alt={props.alt} />
        <p className={styles.awardText}>{props.description}</p>
      </div>
      <div className={styles.right_award}>
        <div className={styles.number}>{props.number}</div>
        {props.labels.map((label, index) => <div key={index} className={styles.label}>{label}</div>)}
      </div>
    </div>
  );
};
