import styles from "./profile.module.css";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { Fragment } from "react";
import { IMember } from "../models/member";
import placeholder from "../images/profiles/placeholder-claw.png";

export default function Profile({ member }: { member: IMember }) {
  return (
    <div className={styles.profile}>
      <img
        className={`responsive-image brand-border ${styles.profilePhoto}`}
        src={member.image || placeholder.src}
        alt="Team Member Profile"
      />
      <div className={styles.name}>{member.name}</div>
      {member.roles && (
        <div className={styles.role}>
          {member.roles
            .flatMap((role) => [<Fragment key={role}>{role}</Fragment>, <br key={role + "-br"} />])
            .slice(0, -1)}
        </div>
      )}
    </div>
  );
}
