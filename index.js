
const request = require('request');
const parsePodcast = require('node-podcast-parser');


const fishURL = 'https://audioboom.com/channels/2399216.rss'

exports.randomEpisode = (req, res) => {
  request(req.query.feed || fishURL, (err, _, data) => {
    if (err) {
      console.error('Network error', err);
      return;
    }

    parsePodcast(data, (err, data) => {
      if (err) {
        console.error('Parsing error', err);
        return;
      }
      const episode = data.episodes[Math.floor(Math.random() * data.episodes.length)]

      res.set('Location', episode.enclosure.url);
      res.status(302).send('');
    });
  });
};