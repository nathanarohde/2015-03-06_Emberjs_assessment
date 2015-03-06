Email.NewMessageController = Ember.ObjectController.extend({
  actions: {
    save: function() {
      var message = this.get('model');
      message.save();

      var controller = this;
      message.get('listOfMessages').then(function(listOfMessages) {
        listOfMessages.save();
        controller.transitionToRoute('listOfMessages', listOfMessages);
      });
    }

  }
});
