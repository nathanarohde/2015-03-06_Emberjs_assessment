Email.Router.map(function() {
  this.resource('listOfMessages', {path: '/'});
  this.resource('message');
  this.resource('new-message');
})
