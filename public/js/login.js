// const express = require('express');
// const bodyParser = require('body-parser');
// const fs = require('fs');

// const app = express();
// const PORT = 3000;

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.use(express.static('public')); // Serve static files from the 'public' folder

// app.post('/login', (req, res) => {
// const { username, password } = req.body;

//     // Read user data from the JSON file
//     const usersData = JSON.parse(fs.readFileSync('/data/user_data.json', 'utf8'));
  
//     // Check if the provided credentials match any user in the JSON file
//     const user = usersData.find(u => u.username === username && u.password === password);
  
//     if (user) {
//       // Redirect to homepage or send some success response
//       res.sendFile(__dirname + '/');
//     } else {
//       // Respond with an error
//       res.status(401).send('Wrong username or password');
//     }
//   });
