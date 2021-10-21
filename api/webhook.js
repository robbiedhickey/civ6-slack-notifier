const fetch = require('node-fetch');

let USER_MAP = {};

// load map with case normalized keys
if(process.env.USER_MAP_JSON) {
  const map = JSON.parse(process.env.USER_MAP_JSON);
  Object.keys(map).forEach(key => {
    USER_MAP[key.toLowerCase()] = map[key]
  }) 
}

const required_params = ["value1", "value2", "value3"]
const validate = (body) => required_params.every(v => Object.keys(body).includes(v));

module.exports = async (req, res) => {
  try {

    const dryRun = Boolean(req.query.dryRun);
    const body = req.body || {};

    if(!validate(body)) {
      return res.status(200).send(`Expected a POST request with the following body: { "value1": "gameName", "value2": "playerName", "value3": "turnNumber" }`)
    }

    const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL;

    // parse civ6 webhook payload
    let {
      value1: gameName,
      value2: playerName,
      value3: turnNumber,
    } = body;

    const slackUserId = USER_MAP[playerName.toLowerCase()]

    if(slackUserId) {
      playerName = `<@${slackUserId}>`;
    }

    const message = `Hey ${playerName}, it's your turn.\nTurn: ${turnNumber}\nGame: \`${gameName}\``;

    if(dryRun) {
      return res.status(200).json({status: "dry run", text: message});
    } else {
      const response = await fetch(slackWebhookUrl, {
        method: 'post', 
        body: JSON.stringify({text: message}),
        headers: { 'Content-Type': 'application/json' }
      });
  
      return res.status(200).send(response.json())
    }
  } catch (err) {
    console.error("Failed to process webhook request: ", err)
    return res.status(500).send("We done messed up: " + err)
  }
}