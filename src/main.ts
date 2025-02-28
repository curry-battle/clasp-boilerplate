import LogWriter from "./logger/logger";
import { sum } from "./sum";

const main = () => {
  const result = sum(1, 9);
  console.log(`The sum is: ${result}`);
};

// for Web API
const doPost = (e: GoogleAppsScript.Events.DoPost) => {
  const response = { text: e.parameter.text };

  // You can write a log to a spreadsheet.
  // When publishing GAS as a Web API, this method is useful because there is no logging mechanism.
  // Before using this, you need to set the LOG_SPREAD_SHEET_ID, LOG_SPREASHEET_SHEET_NAME in the script properties

  // const logWriter = new LogWriter()
  // logWriter.write(`The sum is: ${result}`);

  return ContentService.createTextOutput(JSON.stringify(response)).setMimeType(
    ContentService.MimeType.JSON,
  );
};

// Register as an entry point to be executed from GAS
// biome-ignore lint/suspicious/noExplicitAny: forgive me biome!
(global as any).main = main;
// (global as any).doPost = doPost;
