import styles from "./index.module.css";
import Overlay from "../components/overlay";
import Image from "next/image";
import teamPhoto from "../images/index/team-photo.jpg";

export default function Page () {
  return (
    <main>
      <div className = {styles.section}>
        <Overlay background = {
          <Image src = {teamPhoto} alt = "Lobstah Bots Team Photo" className = {styles.teamPhoto}/>
        } content = {
          <p className = {`${styles.photoText} container`}>We are Lobstah Bots, a FIRST Robotics team that aims to bring access to robotics to students in the Greater Boston area.</p>
        }/>
      </div>
    </main>
  );
}
