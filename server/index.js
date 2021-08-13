let express = require('express');
let app = express();
const port = 3002;

app.get('/', (request, response) => {
  console.log(`URL: ${request.url}`);
  response.send('Hello, Server!');
});

// Start the server
const server = app.listen(port, (error) => {
  if (error) return console.log(`Error: ${error}`);

  console.log(`Server listening on port ${server.address().port}`);
});
