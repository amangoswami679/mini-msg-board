const messages = [
  {
    text: "Hi there!",
    user: "Rupert",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Sandy",
    added: new Date()
  }
];

const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.get('/new', function (req, res, next) {
  res.render('form', { title: 'New Message Form' });
});

router.post('/new', function (req, res, next) {
  const incomingReq = req.body;

  const newMessage = {
    text: incomingReq.text,
    user: incomingReq.user,
    added: new Date(),
  };

  messages.push(newMessage);

  res.redirect('/');
});

module.exports = router;
