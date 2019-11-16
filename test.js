const randomEpisode = require('./index')
randomEpisode.randomEpisode({
  query: {
    feed: 'https://audioboom.com/channels/2399216.rss'
  }
}, {
  set: console.log,
  status: console.log,
  send: console.log
})