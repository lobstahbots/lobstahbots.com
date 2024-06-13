import styles from "./profile.module.css";
import Image from "next/image";
import { StaticImageData } from "next/image";

export interface ProfileProps {
  name: string;
  role?: string | string[];
  image: StaticImageData;
}

export default function Profile ({ name, role, image }: ProfileProps) {
  return (
    <div className={styles.profile}>
      <Image className={`responsive-image brand-border ${styles.profilePhoto}`} src={image} alt="Team Member Profile" />
      <div className={styles.name}>{name}</div>
      {
        role && (
          <div className={styles.role}>{
            Array.isArray(role)
              ? role.flatMap(str => [str, <br/>]).slice(0, -1)
              : role}</div>
        )
      }
    </div>
  );
}
