var websocket;


jQuery(document).ready(function() {

  var host = 'ws://23.244.200.215:8000/socket';
  websocket = new WebSocket(host);

  websocket.onopen = function() {
    console.log('opened');
  }

  websocket.onmessage = function(evt) {
    var tweet = JSON.parse(evt.data);
    add_tweet(tweet['tweet']);
  }

});


function add_tweet(tweet) {
  var topTweet = $('.tweet').eq(0);
  var newTweet = topTweet.clone();

  newTweet.children('p').text(tweet);
  newTweet.insertBefore(topTweet);
}


function new_socket() {
  var hashtag = $('#hashtag').val();
  var session = $('#session').text();

  websocket.send(JSON.stringify({
    'hashtag': hashtag,
    'session': session
  }));
}
