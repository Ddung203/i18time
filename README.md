# i18time

A javascript package for working with Date objects

## Installation

You can install this package via npm by running the following command:

```bash
npm install i18time
```

Or if you are using yarn, run:

```bash
yarn add i18time
```

## Usage

First, import the library into your project:

```javascript
const i18Time = require("i18time");

import * as i18Time from "i18time"; // ES6 modules
```

Then, you can use the package:

```javascript
// Import the i18time package
const i18Time = require("i18time");

// Alternatively, if you are using ES6 modules
import * as i18Time from "i18time";

// Get the current timestamp in milliseconds
const currentTimestampInMillis = i18Time.getTimestampInMilliseconds();
console.log("Current Timestamp in Milliseconds:", currentTimestampInMillis);

// Get the current UNIX timestamp (in seconds)
const currentUnixTimestamp = i18Time.getCurrentUnixTimesamp();
console.log("Current UNIX Timestamp:", currentUnixTimestamp);

// Get the current UNIX timestamp as a string
const currentUnixTimestampString = i18Time.getCurrentUnixTimesampString();
console.log("Current UNIX Timestamp (String):", currentUnixTimestampString);

// Convert timestamp to Date object
const timestamp = 1718138899408; // Example timestamp in milliseconds
const dateFromTimestamp = i18Time.timestampToDate(timestamp);
console.log("Date from Timestamp:", dateFromTimestamp);

// Format a Date object into a string
const formattedDate = i18Time.formatDate(
  dateFromTimestamp,
  "YYYY-MM-DD HH:mm:ss"
);
console.log("Formatted Date:", formattedDate);

// Get the current time in a specific timezone
const currentTimeInTimezone = i18Time.getCurrentTimeInTimezone(7); // Example: UTC+7
console.log("Current Time in Timezone:", currentTimeInTimezone);

// Get the current UTC time
const currentUTCTime = i18Time.getUTCTime();
console.log("Current UTC Time:", currentUTCTime);

// Calculate the difference between two Date objects
const date1 = new Date("2024-06-12T08:00:00");
const date2 = new Date("2024-06-13T08:00:00");
const differenceInMilliseconds = i18Time.differenceInMilliseconds(date1, date2);
console.log("Difference in Milliseconds:", differenceInMilliseconds);

const differenceInSeconds = i18Time.differenceInSeconds(date1, date2);
console.log("Difference in Seconds:", differenceInSeconds);

const differenceInMinutes = i18Time.differenceInMinutes(date1, date2);
console.log("Difference in Minutes:", differenceInMinutes);

const differenceInHours = i18Time.differenceInHours(date1, date2);
console.log("Difference in Hours:", differenceInHours);

const differenceInDays = i18Time.differenceInDays(date1, date2);
console.log("Difference in Days:", differenceInDays);
```

## Features

- Date Formatting: Provide functions to format Date objects into strings according to various formats commonly used in different locales.

- Timezone Support: Offer functionality to work with different time zones, allowing users to convert and display times in their local time.

- Timestamp Conversion: Enable conversion between UNIX timestamps (in seconds or milliseconds) and Date objects.

- Date Comparison: Implement functions to calculate the difference between two Date objects in milliseconds, seconds, minutes, hours, or days.

- Localization: Support for localization, allowing users to display dates and times in their preferred language and format.

- Customization: Allow users to specify custom date and time formats according to their requirements.

## Note

This package is in the testing
