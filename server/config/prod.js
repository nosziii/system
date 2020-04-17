"use strict";

let pkg 	= require("../../package.json");

module.exports = {
	app: {
	},

	db: {
		uri: process.env.MONGO_URI || "mongodb://localhost/" + pkg.config.dbName,
		options: {
			user: process.env.MONGO_USERNAME || "",
			pass: process.env.MONGO_PASSWORD || ""
		}
	},
	redis: {
		enabled: true,
		uri: process.env.REDIS_URI || "redis://localhost:6379",
		options: null
	},
};