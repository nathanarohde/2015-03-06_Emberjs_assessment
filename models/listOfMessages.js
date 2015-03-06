Email.ListOfMessages = DS.Model.extend({
  messages: DS.hasMany('message', {async: true})
});
