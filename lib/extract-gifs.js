export default (posts) => {
  // console.log(posts);
  // map the posts and extract the urls
  return posts
    // only show posts that are swf
    .filter(post => !post.data.over_18)
    .map(post => post.data.url)
    // with gifv urls
    .filter(url => /gifv?$/.exec(url))
    // replace the v with nothing
    .map(url => url.replace(/v$/,''));
}
