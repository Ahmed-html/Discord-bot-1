<h1 align="center">Moderation discord bot</h1>
Requirement:

- Node.js v12.x or upper
- Python (For Advanced Music feature)

Reminders:

- If you are not using Discord Bot lists and top.gg, delete files from `handlers/dbl-loader.js` / `events/dbl/all-files` and removes all codes from index.js with `//`
- If you are using Top.gg bot lists API, u need to delete `//` from commands lines from index.js
- If you are not using .env supported hosters, please add code `require('dotenv').config()` to the top of the code from `index.js`, `shard.js` and other place are needed to use `process.env.(stuff)`

1. To get this bot ready to run locally, the first step is to clone this repository onto the machine you wish to run it on.
2. **Node.js version 12 or newer is recommended to run this bot since we are using Discord.js v12**
3. Use NPM to install the dependencies from the project folder: `npm install`
4. Edit/create the file `.env` (or your hoster's provided environment secret) and insert your bot token in `TOKEN` value.
5. Start the bot from the project folder: `node shard.js`
6. Open `http://localhost:8080/` or your project URL to view the http output.

