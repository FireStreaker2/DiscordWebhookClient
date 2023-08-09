![DiscordWebhookClient](https://socialify.git.ci/FireStreaker2/DiscordWebhookClient/image?description=1&forks=1&issues=1&name=1&owner=1&pulls=1&stargazers=1&theme=Dark)

# About
DiscordWebhookClient is a simple web app that allows users to interact with Discord via webhooks. It works by recieving the webhook and message from the user in the frontend, and then forwards it to the backend so it can make the POST request. The POST request is sent in the backend instead of the frontend in order to bypass CORs, so the data is actually recieved by Discord.

> Note: Currently, DiscordWebhookClient only supports plain text messages. The option for embeds and user customization is not planned to be added. Instead, please use something like [discohook](https://discohook.org/).

# Selfhosting
If you would like to selfhost this project, you may.
```bash
$ git clone https://github.com/FireStreaker2/DiscordWebhookClient.git
$ cd DiscordWebhookClient
$ npm i
$ npm start
```

# License
[MIT](https://github.com/FireStreaker2/DiscordWebhookClient/blob/main/LICENSE)