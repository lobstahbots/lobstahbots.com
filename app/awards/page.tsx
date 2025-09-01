import PageTitle from "../../components/page-title";
import competition from "../../images/index/competition.jpeg";
import entrepreneurship from "../../images/index/week2-team-photo.jpg";
import creativity from "../../images/awards/creativity.jpg";
import engineering from "../../images/awards/engineering.jpeg";
import finalist from "../../images/awards/finalist_photo.jpg";
import innovation from "../../images/awards/innovation.jpg";
import sportsmanship from "../../images/awards/sportsmanship.jpg";
import impact from "../../images/awards/impact.jpg";
import engineering_2 from "../../images/awards/engineering_2.jpg";
import defense from "../../images/awards/defense.jpg";
import quality2023 from "../../images/awards/quality2023.jpg";
import finalists2023 from "../../images/awards/finalists2023.jpg";
import winners from "../../images/awards/winners.jpg";
import team from "../../images/index/members.jpg";
import quality2024 from "../../images/awards/quality2024.jpg";
import judges2024 from "../../images/awards/judges2024.jpg";
import placeholder from "../../images/profiles/placeholder-claw.png";
import ee2025 from "../../images/awards/ee2025.jpg";
import spirit2025 from "../../images/awards/spirit2025.jpg";
import { Award, AwardProps } from "../../components/award";
import gp2025 from "../../images/awards/gp2025.jpg";
import styles from "./styles.module.css";
import { SimpleEvent, Award as AwardType } from "../../lib/types";
import untypedAwardTypes from "./awards.json";
import {
  AWARDS_RECENT_START_YEAR,
  AWARDS_URL,
  EVENTS_URL,
  headers,
  getImageFromMap,
  awardComparator,
  AwardWithCount,
} from "../../lib/tbaStuff";
import { StaticImageData } from "next/image";
import PoweredByTba from "../../components/poweredByTba";

const awardTypes = untypedAwardTypes as { award_type: number; name: string; description: string }[];

export const metadata = {
  title: "Our Awards",
};

const awardImages = new Map<string, StaticImageData>([
  ["Excellence in Engineering Award 2025", ee2025],
  ["Team Spirit Award 2025", spirit2025],
  ["Gracious Professionalism® Award 2025", gp2025],
  ["Innovation in Control Award 2024", team],
  ["Judges' Award 2024", judges2024],
  ["Creativity Award", creativity],
  ["Quality Award 2023", quality2023],
  ["Quality Award 2024", quality2024],
  ["Event Finalists 2023", finalists2023],
  ["Event Winners", winners],
  ["Event Finalists", finalist],
  ["Impact (Chairman's) Award", impact],
  ["Entrepreneurship Award", entrepreneurship],
  ["Engineering Inspiration Award", engineering],
  ["Innovation in Control Award", innovation],
  ["Excellence in Engineering Award", engineering_2],
  ["Sportsmanship Award", sportsmanship],
  ["Outstanding Defense Award", defense],
  ["Rookie All-Star Award", competition],
]);

export default async function Awards() {
  const [awards, events]: [AwardType[], SimpleEvent[]] = await Promise.all([
    fetch(AWARDS_URL, { headers, cache: "force-cache" }).then((response) => response.json()),
    fetch(EVENTS_URL, { headers, cache: "force-cache" }).then((response) => response.json()),
  ]);
  const recentAwards: Omit<AwardProps, "imageLeft">[] = [];
  for (const award of awards
    .filter((award) => award.year >= AWARDS_RECENT_START_YEAR)
    .sort((awardA, awardB) => {
      if (awardA.event_key === awardB.event_key)
        return awardComparator({ ...awardA, count: 1 }, { ...awardB, count: 1 });
      return events
        .find((event) => event.key === awardB.event_key)!
        .start_date.localeCompare(
          events.find((event) => event.key === awardA.event_key)!.start_date,
        );
    })) {
    const event = events.find((event) => event.key === award.event_key)!;
    const awardType = awardTypes.find((type) => type.award_type === award.award_type);
    if (!awardType) continue;
    let description;
    if (award.award_type === 1) {
      description = "Our team proudly won the " + event.name + " in the" + award.year + " season.";
    } else if (award.award_type === 2) {
      description =
        "Our team was proud Event Finalists at the " +
        event.name +
        " in the " +
        award.year +
        " season.";
    } else {
      description =
        "Our team won the " +
        awardType.name +
        " at the " +
        event.name +
        " in the " +
        award.year +
        " season. " +
        awardType.description;
    }
    recentAwards.push({
      number: award.year.toString(),
      labels: [awardType.name],
      image: getImageFromMap(awardImages, awardType.name + " " + award.year, placeholder),
      alt: award.year + " " + awardType.name + " Photo",
      description,
    });
  }
  const countedAwards = awards
    .reduce((acc: AwardWithCount[], award): AwardWithCount[] => {
      let accAward: AwardWithCount | undefined;
      if ((accAward = acc.find((accAward) => accAward.award_type === award.award_type))) {
        accAward.count++;
        if (award.year > accAward.year) {
          accAward.year = award.year;
          accAward.event_key = award.event_key;
        }
      } else {
        acc.push({ ...award, count: 1 });
      }
      return acc;
    }, [])
    .sort(awardComparator);
  const pastAwardData: Omit<AwardProps, "imageLeft">[] = [];
  for (const award of countedAwards) {
    const awardType = awardTypes.find((type) => type.award_type === award.award_type);
    if (!awardType) continue;
    pastAwardData.push({
      number: award.count > 1 ? "x" + award.count : "",
      labels: [awardType.name],
      description: awardType.description,
      image: getImageFromMap(awardImages, awardType.name, placeholder),
      alt: awardType.name + " Photo",
    });
  }
  return (
    <main>
      <PageTitle>Awards</PageTitle>
      <section className="section bg-gray">
        <div className={styles.spacerGray} />
        <h1 className={styles.sectionHeader}>Recent Awards</h1>
        {recentAwards.map((award, index) => (
          <Award {...award} key={index} imageLeft={index % 2 === 1} />
        ))}
        <div className={styles.spacerGray} />
      </section>
      <section className="section">
        <h1 className={styles.sectionHeader}>All Awards</h1>
        {pastAwardData.map((award, index) => (
          <Award {...award} key={index} imageLeft={index % 2 === 1} />
        ))}
      </section>
      <PoweredByTba />
    </main>
  );
}
