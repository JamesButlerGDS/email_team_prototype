var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

var data = {
  address: 'foo@example.com',
  preferences: [
    {
      name: 'daily',
      value: 'as one combined email',
    },
    {
      name: 'weekly',
      value: 'as separate emails',
    },
  ],
  subscriptions: [
    {
      title: 'Publications from the Department for Education',
      frequency: 'daily',
      channel: 'an email',
      url: "https://example.com/subscription-1",
    },
    {
      title: 'Spain Travel Alerts',
      frequency: 'immediately',
      channel: 'a text message',
      url: "https://example.com/subscription-2",
    },
  ]
}

router.get('/manage', function (req, res) {
  res.render('manage', data);
})

module.exports = router
