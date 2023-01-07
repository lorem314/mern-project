import app from "./express"
import config from "../config/config"

import mongoose from "mongoose"

mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
})
mongoose.connection.on("error", () => {
  console.error(`Unable to connect to database: ${config.mongoUri}`)
  throw new Error(`Unable to connect to database: ${config.mongoUri}`)
})
mongoose.connection.on("connected", () => {
  console.info(`Successfully connected to MongoDB!`)
})

app.listen(config.port, function onStart(err) {
  if (err) {
    console.error(err)
  }
  console.info(`Server started on port %s.`, config.port)
})
