# Civilation VI Slack Notifier

This project is designed to easily deploy your own webhook using vercel to capture and forward notifications to a slack channel. 

## Getting Started

* Clone/fork this repo
* [Create a slack webhook](https://api.slack.com/messaging/webhooks#create_a_webhook)
* Sign up for an account at [Vercel](https://vercel.com/signup)
* Install the vercel-cli: `npm install -g vercel`
* Login to vercel: `vercel login`
* Add an environment variable for your webhook: `vercel env add SLACK_WEBHOOK_URL <url>`
* Deploy the stack: `vercel --prod`
* After the deployment is complete, a URL will be copied to your clipboard. Paste the following into your Play by Cloud Webhook setting in your Civ VI game: `{vercel_deployment_url}/api/webhook`

## Optional Enhancements

If you want to include @ mentions in your turn notifications, you can also add a `USER_MAP_JSON` environment variable. It expects a parseable JSON string, you can see an example in the provided `.env.sample` file. You can find a user's slack userId with the steps in [this article](https://moshfeu.medium.com/how-to-find-my-member-id-in-slack-workspace-d4bba942e38c)