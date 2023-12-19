import styles from "./profile.module.css";
import Image from "next/image";

export interface ProfileProps {
  name: string;
  role?: string;
  picture: string;
}

export default function Profile ({ name, role, picture }: ProfileProps) {
  return (
    <div className={styles.profile}>
      <Image className={`responsive-image brand-border ${styles.profilePhoto}`} src={picture} alt="Team Member Profile" />
      <div className={styles.name}>{name}</div>
      {
        role && (
          <div className={styles.role}>{role}</div>
        )
      }
    </div>
  );
}
