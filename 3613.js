'use strict'

const mike = {
  friends: [{
    name: 'Anna',
    avatar: {
      url: 'http://some/url/to/avatar'
    }
  }]
}

function getAvatar (person, urlDefault) {
  let url;

  if (person.friends[0] === undefined) {
    return urlDefault;
  } else {
    url = person.friends[0].avatar.url
    if (url === undefined) {
      return urlDefault;
    }
    return url;
  }
}

console.log(getAvatar(mike, 'http://default/url/to/avatar'));