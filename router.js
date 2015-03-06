Email.Router.map(function() {
  this.resource('listOfMessages', {path: '/'});
  this.resource('message', {path: ':message_id'});
  this.resource('new-message');
});
