Email.MessageRoute = Ember.Route.extend({
  model: function(params){
    return this.store.find('message', params.message_id);
  }
});
