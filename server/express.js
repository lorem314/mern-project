import express from "express"
import htmlIndex from "../server/templates/html-index"
import React from "react"
import ReactDOMServer from "react-dom/server"
import MainRouter from "../client/MainRouter"
import { StaticRouter } from "react-router-dom"

import devBundle from "./devBundle"

const app = express()
devBundle.compile(app)

app.use("*", (req, res) => {
  const context = {}
  const markup = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <MainRouter />
    </StaticRouter>
  )
  if (context.url) {
    return res.redirect(303, context.url)
  }
  res.status(200).send(htmlIndex({ markup: markup }))
})

app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ error: err.name + ": " + err.message })
  } else if (err) {
    res.status(400).json({ error: err.name + ": " + err.message })
    console.log(err)
  }
})

export default app
