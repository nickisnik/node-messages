var express = require('express');
var router = express.Router();
const mongoose = require('mongoose')
const Subscriber = require('../models/subscriber')

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to DB!'))

// Find all
router.get('/', async (req, res) => {
  try {
     const subscribers = await Subscriber.find() 
     res.json(subscribers)
  } catch(err) {
      res.status(500).json({ message: err.message })
  }
});


const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];
/* GET home page. */
/* router.get('/', (req, res) => {
  res.render('index', { messages: messages })
}); */

router.get('/new', (req, res) => {
  res.render('form')
})

router.post('/new', (req, res) => {
  const message = req.body;
  messages.push({text: message.body, user: message.author, added: new Date()});
  res.redirect('/')
})

module.exports = router;
