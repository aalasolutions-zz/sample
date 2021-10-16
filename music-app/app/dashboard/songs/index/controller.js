import Controller from '@ember/controller';

export default Controller.extend({


  actions: {
    delete(record) {
      record.destroyRecord();
    },
  },

});
