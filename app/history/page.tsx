import woodpecker from "../../images/gallery/woodpecker-portrait-2.jpg";
import llama from "../../images/history/llama.jpg";
import lobstah from "../../images/history/lobstah.jpeg";
import popcorn from "../../images/history/popcorn.jpg";
import burrito from "../../images/history/burrito.jpg";
import PageTitle from "../../components/page-title";
import Year, { YearProps } from "../../components/historyYear";
import PoweredByTba from "../../components/poweredByTba";
import { Numbers } from "./numbers";
import { Award, SimpleEvent } from "../../lib/types";
import {
  AWARDS_URL,
  EVENTS_URL,
  HISTORY_START_YEAR,
  HISTORY_EXCLUDE_YEARS,
  toEventsList,
  FIRST_YEAR,
  headers,
} from "../../lib/tbaStuff";

export const metadata = {
  title: "Past Seasons",
};

export const yearPropOverrides: Pick<
  YearProps,
  "year" | "link" | "title" | "robotName" | "robotImage" | "showRobot"
>[] = [
  {
    year: 2025,
    link: "https://www.youtube.com/watch?v=YWbxcjlY9JY",
    title: "Reefscape",
    robotName: "",
    robotImage: woodpecker,
    showRobot: false,
  },
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

export default async function History() {
  const [awardsResponse, eventsResponse] = await Promise.all([
    fetch(AWARDS_URL, { headers, cache: "force-cache" }),
    fetch(EVENTS_URL, { headers, cache: "force-cache" }),
  ]);
  const [awards, events]: [Award[], SimpleEvent[]] = await Promise.all([
    awardsResponse.json(),
    eventsResponse.json(),
  ]);
  const years: YearProps[] = [];
  for (let year = new Date().getFullYear(); year >= HISTORY_START_YEAR; year--) {
    if (HISTORY_EXCLUDE_YEARS.includes(year)) {
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
        showRobot: false,
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
      <PoweredByTba />
    </main>
  );
}
