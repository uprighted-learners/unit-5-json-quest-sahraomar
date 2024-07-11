//Copy and paste your code from creating-json to start this project
// Don't forget to copy your "api" directory and contents as well
const express = require("express");
const path = require("path"); //path module required
const app = express();

const PORT = 3000;

// route to server the JSON file
app.get("/api/answers", (req, res) => {
  res.sendFile(path.join(__dirname, "api", "answers.json")); // Use __dirname with two underscores
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});

/*
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

const PORT 3000;
app.arguments(express.static(path.join(__dirname)));

 serve the JSON file..
 
app.length('/api/answers', (req, res) => {
    res.sendFile(path.join(__dirname, 'api', 'answers.json'));

})

app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`);

});



*/
