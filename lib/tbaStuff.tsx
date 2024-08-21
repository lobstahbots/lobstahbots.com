import { StaticImageData } from "next/image";
import { SimpleEvent, ImageMap, Award } from "./types";

export const FIRST_YEAR = 1999;
export const HISTORY_START_YEAR = 2019;
export const AWARDS_RECENT_START_YEAR = 2023;
export const HISTORY_EXCLUDE_YEARS = [2021];
export const TEAM_KEY = "frc246";
export const AWARDS_URL = `https://www.thebluealliance.com/api/v3/team/${TEAM_KEY}/awards`;
export const EVENTS_URL = `https://www.thebluealliance.com/api/v3/team/${TEAM_KEY}/events/simple`;
export const headers = new Headers();
headers.append("X-TBA-Auth-Key", process.env.TBA_AUTH_KEY!);
headers.append("Accept", "application/json");

export const toEventsList = (events: SimpleEvent[]) => {
  return events
    .filter((event) => !event.name.toLowerCase().includes("cancelled"))
    .sort((eventA, eventB) => eventA.start_date.localeCompare(eventB.start_date))
    .map((event) => ({
      name: event.year + " " + event.name.replace("NE", "New England"),
      link: `https://www.thebluealliance.com/event/${event.key}`,
    }));
};

export const getImageFromMap = (
  map: ImageMap,
  awardName: string,
  fallback: StaticImageData,
): StaticImageData => {
  if (map.has(awardName)) return map.get(awardName)!;
  const applicableImageKeys = Array.from(map.keys())
    .filter((key) => key.startsWith(awardName) || awardName.startsWith(key))
    .sort();
  if (applicableImageKeys.length) return map.get(applicableImageKeys.at(-1)!)!; // Return the most recent picture
  return fallback;
};

export type AwardWithCount = Award & { count: number };

export const awardComparator = (awardA: AwardWithCount, awardB: AwardWithCount) => {
  if (awardA.award_type === 1) return -1;
  if (awardB.award_type === 1) return 1;
  if (awardA.award_type === 2) return -1;
  if (awardB.award_type === 2) return 1;
  if (awardA.award_type === 0) return -1;
  if (awardB.award_type === 0) return 1;
  if (awardA.count !== awardB.count) return awardB.count - awardA.count;
  if (awardA.year !== awardB.year) return awardB.year - awardA.year;
  return awardA.name.localeCompare(awardB.name);
};
