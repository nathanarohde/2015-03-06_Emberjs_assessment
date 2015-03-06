Email.NewMessageRoute = Ember.Route.extend({
  model:function() {
    return this.store.find('message');
  }
});
