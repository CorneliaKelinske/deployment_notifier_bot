require('dotenv').config();
const axios = require('axios');

const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;

const notifySlack = async (message) => {
  if (!SLACK_WEBHOOK_URL) {
    console.error('Slack Webhook URL is missing!');
    return;
  }

  try {
    await axios.post(SLACK_WEBHOOK_URL, {
      text: message,
    });
    console.log('Notification sent to Slack!');
  } catch (error) {
    console.error('Error posting to Slack:', error);
  }
};

// Example usage
const message = `🚀 Site redeployed successfully at ${new Date().toLocaleString()}!`;
notifySlack(message);
