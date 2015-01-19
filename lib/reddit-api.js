/**
 * access the reddit json api - ES6 class
 *
 * @author Michael Funk [mike@mikefunk.com]
 */
import jsonp from 'jsonp';

/**
 * access the reddit json api
 */
class RedditApi {
  constructor() {
    this.redditURL = 'http://www.reddit.com/r/perfectloops.json';
  }

  /**
   * load reddit json data and do something with it
   *
   * @return {Object} the json from reddit
   */
  load() {
    // this is an async operation and ES6 has native promises so let's use that
    return new Promise((resolve, reject) => {
      // get the json data from reddit
      jsonp(this.redditURL, {param: 'jsonp'}, (err, data) => {
        // return the json for each post
        err ? reject(err) : resolve(data.data.children);
      });
    });
  }
}

export default new RedditApi();
