Email.NewMessageController = Ember.ObjectController.extend({
  actions: {
    send: function() {
      var newMessage = this.store.createRecord('message',
      {
        name: this.get('name'),
        address: this.get('address'),
        title: this.get('title'),
        body: this.get('body')
      });
      newMessage.save();
      this.set('name', null);
      this.set('address', null);
      this.set('title', null);
      this.set('body', null);

      transitionToRoute('listOfMessages');
      }
    }
});
