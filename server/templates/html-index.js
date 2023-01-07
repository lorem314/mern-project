export default ({ markup }) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>MERN DEV ENV</title>
      </head>
      <body>
        // highlight-next-line
        <div id="root">${markup}</div>
        <script type="text/javascript" src="/dist/bundle.js"></script>
      </body>
    </html>
  `
}
