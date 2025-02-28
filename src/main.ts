import { sum } from "./sum.js";

const main = () => {
  const result = sum(1, 9);
  console.log(`The sum is: ${result}`);
};

const doPost = (e: GoogleAppsScript.Events.DoPost) => {
  const response = { text: e.parameter.text };

  return ContentService.createTextOutput(JSON.stringify(response)).setMimeType(
    ContentService.MimeType.JSON,
  );
};

// Register as an entry point to be executed from GAS
(global as any).main = main;
