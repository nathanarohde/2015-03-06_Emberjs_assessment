Email.Message = DS.Model.extend({
  name: DS.attr(),
  address: DS.attr(),
  title: DS.attr(),
  body: DS.attr(),
  listOfMessages: DS.belongsTo('listOfMessages', {async: true})
});
