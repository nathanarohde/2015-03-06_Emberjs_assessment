// Email.NewMessageRoute = Ember.Route.extend({
//   model:function() {
//     return this.store.('message');
//   }
// });
// Email.NewMessageRoute = Ember.Route.extend ({
//   model: function(params) {
//     var listOfMessages = this.modelFor('listOfMessages');
//     var message = this.store.createRecord('message');
//     listOfMessages.get('messages').then(function(messages) {
//       messages.pushObject(message);
//     });
//
//     return message;
//
//   }
// })
