import Route from '@ember/routing/route';

export default Route.extend({
  willTransition() {
    const {model} = this.controller;

    if (model.isNew) model.unloadRecord();
    if (model.hasDirtyAttributes) model.rollbackAttributes();
    if (typeof model.rollbackRelationships !== "undefined") model.rollbackRelationships();
  }

});
