import woodpecker from "../../images/gallery/woodpecker-portrait-2.jpg";
import llama from "../../images/history/llama.jpg";
import lobstah from "../../images/history/lobstah.jpeg";
import popcorn from "../../images/history/popcorn.jpg";
import burrito from "../../images/history/burrito.jpg";
import PageTitle from "../../components/page-title";
import Year, { YearProps } from "../../components/historyYear";
import { Numbers } from "./numbers";
import Link from "next/link";
import styles from "./styles.module.css";

export const metadata = {
  title: "Past Seasons",
};

export const yearPropOverrides: Pick<
  YearProps,
  "year" | "link" | "title" | "robotName" | "robotImage"
>[] = [
  {
    year: 2024,
    link: "https://www.youtube.com/watch?v=9keeDyFxzY4",
    title: "Crescendo",
    robotName: "Woodpecker",
    robotImage: woodpecker,
  },
  {
    year: 2023,
    link: "https://www.youtube.com/watch?v=0zpflsYc4PA",
    title: "Charged Up",
    robotName: "Llama",
    robotImage: llama,
  },
  {
    year: 2022,
    link: "https://www.youtube.com/watch?v=LgniEjI9cCM",
    title: "Rapid React",
    robotName: "Lobstah",
    robotImage: lobstah,
  },
  {
    year: 2020,
    link: "https://www.youtube.com/watch?v=I77Dz9pfds4",
    title: "Infinite Recharge",
    robotName: "Popcorn",
    robotImage: popcorn,
  },
  {
    year: 2019,
    link: "https://www.youtube.com/watch?v=Mew6G_og-PI",
    title: "Deep Space",
    robotName: "Burrito",
    robotImage: burrito,
  },
];

const FIRST_YEAR = 1999;
const START_YEAR = 2019;
const EXCLUDE_YEARS = [2021];
export const TEAM_KEY = "frc246";
const AWARDS_URL = `https://www.thebluealliance.com/api/v3/team/${TEAM_KEY}/awards`;
const EVENTS_URL = `https://www.thebluealliance.com/api/v3/team/${TEAM_KEY}/events/simple`;
export const headers = new Headers();
headers.append("X-TBA-Auth-Key", process.env.TBA_AUTH_KEY!);
headers.append("Accept", "application/json");

export interface SimpleEvent {
  key: string;
  name: string;
  event_type: number;
  year: number;
  start_date: string;
}

export const toEventsList = (events: SimpleEvent[]) => {
  return events
    .filter((event) => !event.name.toLowerCase().includes("cancelled"))
    .sort((eventA, eventB) => eventA.start_date.localeCompare(eventB.start_date))
    .map((event) => ({
      name: event.year + " " + event.name.replace("NE", "New England"),
      link: `https://www.thebluealliance.com/event/${event.key}`,
    }));
};

export default async function History() {
  const [awardsResponse, eventsResponse] = await Promise.all([
    fetch(AWARDS_URL, { headers, cache: "force-cache" }),
    fetch(EVENTS_URL, { headers, cache: "force-cache" }),
  ]);
  const [awards, events]: [any[], SimpleEvent[]] = await Promise.all([
    awardsResponse.json(),
    eventsResponse.json(),
  ]);
  const years: YearProps[] = [];
  for (let year = new Date().getFullYear(); year >= START_YEAR; year--) {
    if (EXCLUDE_YEARS.includes(year)) {
      continue;
    }
    years.push({
      events: toEventsList(
        events.filter((event) => event.year === year && event.event_type !== 99),
      ),
      offseasonEvents: toEventsList(
        events.filter((event) => event.year === year && event.event_type === 99),
      ),
      ...(yearPropOverrides.find((override) => override.year === year) ?? {
        link: "",
        title: year.toString(),
        robotName: "Robot",
        robotImage: lobstah,
        year,
      }),
    });
  }
  const yearsCompeted = new Date().getFullYear() - FIRST_YEAR + 1;
  const awardsEarned = awards.length;
  const eventsAttended = events.length;
  return (
    <main>
      <PageTitle>Past Seasons</PageTitle>
      <Numbers
        yearsCompeted={yearsCompeted}
        awardsEarned={awardsEarned}
        eventsAttended={eventsAttended}
      />
      {years
        .sort((yearA, yearB) => yearB.year - yearA.year)
        .map((year, index) => (
          <Year {...year} key={year.year} className={index % 2 === 0 ? "bg-gray" : undefined} />
        ))}
      <section className="section container">
        <div>
          Powered by <Link id={styles.tbaLink} target="_blank" href="https://www.thebluealliance.com">The Blue Alliance</Link>.
        </div>
      </section>
    </main>
  );
}
