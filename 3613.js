var mike = {
  friends: [{
    name: 'Anna',
    avatar: {
      url: 'http://some/url/to/avatar'
    }
  }]
}
var url;
var friend = mike.friends[0];
if (friend === undefined) {
  url = 'http://default/url/to/avatar'
} else {
  url = mike.friends[0].avatar.url;
  if (url === undefined) {
    url = 'http://default/url/to/avatar'
  }
}
console.log(url);