const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 4000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));



// mongoose.connect('mongodb://localhost/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI)
.then(()=> console.log('Connected to MongoDB'))
.catch(err=> console.error('error connecting to mongoDB: ',err));


const userSchema = new mongoose.Schema({
  email: String,
  password: String
});

const User = mongoose.model('User', userSchema);


// Define routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Find user by email
  User.findOne({ email: email }, (err, user) => {
    if (err) {
      console.error(err);
      res.send('Error occurred.');
    } else if (!user) {
      res.send('User not found.'); // Redirect back to login page
    } else {
                                   // Validate password
      if (user.password === password) {
        res.send('Login successful!'); // Redirect to dashboard or send a token
      } else {
        res.send('Invalid email or password.'); // Redirect back to login page
      }
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



