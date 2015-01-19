/**
 * Description
 *
 * @author Michael Funk [mike@mikefunk.com]
 * @param {array} urls the urls of each post
 * @return {void}
 */
export default (urls) => {
  var elem = document.querySelector('#gifs');
  elem.innerHTML = urls.map(url => `<img src="${url}">`).join("\n");
  return;
}
