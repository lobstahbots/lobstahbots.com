import Link from "next/link";
import { ExternalLink } from "react-feather";
import Image from "next/image";
import { StaticImageData } from "next/image";
import styles from "./historyYear.module.css";

export interface EventProps {
  link: string;
  name: string;
}

export function Event(props: EventProps & {title: string}) {
  return (
    <div className={styles.event}>
      <h3>{props.title}: </h3>
      <Link href={props.link} className="link">{props.name}</Link>
    </div>
  );
}

export interface YearProps {
  year: number;
  link: string;
  title: string;
  robotName: string;
  robotImage: string | StaticImageData;
  events: EventProps[];
  offseasonEvents: EventProps[];
}

export default function Year(props: YearProps & {className?: string}) {
  return (
    <section className={props.className ?? "section"}>
      <div className={`container cols2_1 ${props.className ? "section" : ""}`}>
        <div>
          <h2>{props.year}</h2>
          <Link href={props.link} className={styles.number}>{props.title} <ExternalLink className={styles.externalLink} /></Link>
          <div className={styles.events}>
            {props.events.map((event, index) => <Event {...event} key={index} title={`Event ${index + 1}`} />)}
            {props.offseasonEvents.map((event, index) => <Event {...event} key={index} title={`Off-Season ${index + 1}`} />)}
          </div>
        </div>
        <div>
          <Image className={`responsive-image brand-border ${styles.robotPhoto}`} src={props.robotImage} alt={`${props.year} Robot (${props.robotName})`} />
          <h3 className={styles.robotName}> Robot: <i>{props.robotName}</i></h3>
        </div>
      </div>
    </section>);
}
