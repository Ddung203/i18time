declare function getCurrentUnixTimesamp(): number;
declare function getCurrentUnixTimesampString(): string;
declare function timestampToDate(timestamp: number | string): Date;
declare function formatDate(date: Date, format?: string): string;
declare function getCurrentTimeInTimezone(
  offset: number,
  format?: string
): string;
declare function getUTCTime(format?: string): string;
declare function dateToTimestamp(date: Date): number;
declare function getTimestampInMilliseconds(): number;
declare function differenceInMilliseconds(date1: Date, date2: Date): number;
declare function differenceInSeconds(date1: Date, date2: Date): number;
declare function differenceInMinutes(date1: Date, date2: Date): number;
declare function differenceInHours(date1: Date, date2: Date): number;
declare function differenceInDays(date1: Date, date2: Date): number;
