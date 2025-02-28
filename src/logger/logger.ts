export const LOG_SPREASHEET_ID =
  PropertiesService.getScriptProperties().getProperty("LOG_SPREAD_SHEET_ID");
export const LOG_SPREASHEET_SHEET_NAME = "シート1";

export default class LogWriter {
  constructor(
    private spreadsheetId: string = LOG_SPREASHEET_ID,
    private sheetName = "シート1",
  ) {}

  // ref: https://gist.github.com/takanakahiko/4319e352beeb9884d6588fb23713f02c
  write(text: string) {
    const spreadsheet = SpreadsheetApp.openById(this.spreadsheetId);
    const sheet = spreadsheet.getSheetByName(this.sheetName);
    sheet.appendRow([new Date(), text]);
  }
}
