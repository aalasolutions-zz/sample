import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return this.store.findAll('album');
  },

    willTransition() {
    const {model} = this.controller;
    console.log('test;')
    if (model.isNew) model.unloadRecord();
    if (model.hasDirtyAttributes) model.rollbackAttributes();
    if (typeof model.rollbackRelationships !== "undefined") model.rollbackRelationships();
  }

});
