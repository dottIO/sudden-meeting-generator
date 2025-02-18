export const SLACK_API = {
  OAUTH_V2_ACCESS: "https://slack.com/api/oauth.v2.access",
  CHAT_POST_MESSAGE: "https://slack.com/api/chat.postMessage",
};

export const REGION = "asia-northeast1";
export const SLACK_REDIRECT_URI = `https://${REGION}-sudden-meeting-generator.cloudfunctions.net/slack-callback`;
export const SLACK_BOT_TOKEN = process.env.SLACK_BOT_TOKEN || "";
