import { StaticImageData } from "next/image";

/**
 * Represents a recipient of an award as returned by the TBA API.
 * @see {@link Award}
 */
export interface AwardRecipient {
  /**
   * The TBA team key for the team that was given the award.
   */
  team_key: string | null;
  /**
   * The name of the individual given the award.
   */
  awardee: string | null;
}

/**
 * Represents an award won at an event as returned by the TBA API.
 */
export interface Award {
  /**
   * The name of the award as provided by FIRST. May vary for the same award type.
   */
  name: string;
  /**
   * Type of award given. See
   * https://github.com/the-blue-alliance/the-blue-alliance/blob/py3/src/backend/common/consts/award_type.py#L8
   */
  award_type: number;
  /**
   * The event_key of the event the award was won at.
   */
  event_key: string;
  /**
   * A list of recipients of the award at the event.
   */
  recipient_list: AwardRecipient[];
  /**
   * The year this award was won.
   */
  year: number;
}

/**
 * Represents an FRC district as returned by the TBA API.
 */
export interface District {
  /**
   * The short identifier for the district.
   */
  abbreviation: string;
  /**
   * The long name for the district.
   */
  display_name: string;
  /**
   * Key for this district, e.g. `2016ne`.
   */
  key: string;
  /**
   * Year this district participated.
   */
  year: number;
}

type DateString = `${number}-${number}-${number}`;

/**
 * Represents a simple event as returned by the TBA API.
 */
export interface SimpleEvent {
  /**
   * TBA event key with the format yyyy[EVENT_CODE], where yyyy is the year, and EVENT_CODE is the
   * event code of the event.
   */
  key: string;
  /**
   * Official name of the event on record either provided by FIRST or organizers of off-season
   * events.
   */
  name: string;
  /**
   * Event short code, as provided by FIRST.
   */
  event_code: string;
  /**
   * Event Type, as defined here:
   * https://github.com/the-blue-alliance/the-blue-alliance/blob/py3/src/backend/common/consts/event_type.py#L8
   */
  event_type: number;
  /**
   * The district this event was a part of.
   * @see {@link District}
   */
  district: District | null;
  /**
   * City, town, village, etc. the event is located in.
   */
  city: string | null;
  /**
   * State or Province the event is located in.
   */
  state_prov: string | null;
  /**
   * Country the event is located in.
   */
  country: string | null;
  /**
   * Event start date in `yyyy-mm-dd` format.
   */
  start_date: DateString;
  /**
   * Event end date in `yyyy-mm-dd` format.
   */
  end_date: DateString;
  /**
   * Year the event data is for.
   */
  year: number;
}

export type ImageMap = Map<string, StaticImageData>;
