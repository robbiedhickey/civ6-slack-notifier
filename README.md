# Civilization VI Slack Notifier [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Frobbiedhickey%2Fciv6-slack-notifier&env=SLACK_WEBHOOK_URL&envDescription=You%20can%20generate%20a%20Slack%20webhook%20URL%20by%20following%20the%20steps%20at%20this%20link%3A%20https%3A%2F%2Fapi.slack.com%2Fmessaging%2Fwebhooks%23create_a_webhook&project-name=civ6-slack-notifier&repo-name=civ6-slack-notifier)

This project is designed to easily deploy your own webhook using vercel to capture and forward notifications to a slack channel. 

## Deploy Button Setup

* Fork this repo
* Click the `Deploy with Vercel` button in the header
  * You will be asked to provide your `SLACK_WEBHOOK_URL`

## Manual Setup

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
