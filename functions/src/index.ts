import { initializeApp } from "firebase-admin/app";
initializeApp();

import { onSchedule } from "firebase-functions/v2/scheduler";
import { createSuddenMeeting } from "./service/meetingService";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import * as slack from "./api/slackController";

dayjs.extend(timezone);
dayjs.extend(utc);
dayjs.tz.setDefault("Asia/Tokyo");

// 火曜日9時に実行
export const scheduledFunctionCrontab = onSchedule(
  {
    schedule: "0 9 * * 2", // b. 構成値は関数の第一引数に
    timeZone: "Asia/Tokyo",
  },
  async () => {
    await createSuddenMeeting();
    return;
  }
);

export { slack };
