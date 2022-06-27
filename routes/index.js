var express = require('express');
var router = express.Router();

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
router.get('/', (req, res) => {
  res.render('index', { messages: messages })
});

router.get('/new', (req, res) => {
  res.render('form')
})

router.post('/new', (req, res) => {
  const message = req.body;
  messages.push({text: message.body, user: message.author, added: new Date()});
  res.redirect('/')
})

module.exports = router;
