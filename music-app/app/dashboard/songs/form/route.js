import Route from '@ember/routing/route';

export default Route.extend({


  model(params) {
    if (params.id === "new") {
      return this.store.createRecord("song");
    } else {
      return this.store.findRecord("song", params.id);
    }
  },

  afterModel(model) {
    model.pinRelationships();
  },

  actions: {

    save() {
      const self = this;
      const {model} = self.controller;
      model.save().then(() => {

        self.transitionTo('dashboard.songs');
        // rollbackRelationships

      });
    },

    willTransition() {
      const {model} = this.controller;
      if (model.isNew) model.unloadRecord();
      if (model.hasDirtyAttributes) model.rollbackAttributes();
      if (typeof model.rollbackRelationships !== "undefined") model.rollbackRelationships();
    }
  },



});
