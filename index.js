const { Client, GatewayIntentBits, Events } = require("discord.js")
const { token, clientId } = require("./config.json")

const client = new Client({
	intents: [GatewayIntentBits.Guilds],
})

client.once(Events.ClientReady, () => {
	console.log("Ready!")
})

// on commands call
client.on(Events.InteractionCreate, async (interaction) => {
	if (!interaction.isChatInputCommand()) return // executing everything but commands interaction

	const { commandName, options } = interaction
	if (commandName === "test") {
		await interaction.reply("hello")
	}
})
client.login(token) // login the bot
