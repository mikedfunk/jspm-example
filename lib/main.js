/**
 * main app javascript
 *
 * @author Michael Funk [mike@mikefunk.com]
 */
import RedditApi from './reddit-api';
import ExtractGifs from './extract-gifs';
import DisplayGifs from './display-gifs';

// this returns a promise, so get the result and assign it to posts, then log
// said posts
RedditApi.load()
  // extract urls from gifs
  .then(ExtractGifs)
  // display them on the page
  // .then(urls => console.log(urls));
  .then(DisplayGifs);

// let state = 'compiled and loaded';
// console.log(`dynamically ${state}!`);

export default {};
