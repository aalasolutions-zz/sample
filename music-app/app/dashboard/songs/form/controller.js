import Controller from '@ember/controller';

export default Controller.extend({
  init() {
    this._super(...arguments)
    this.set('genre', this.store.findAll('genre'));
    this.set('artists', this.store.findAll('artist'));
    this.set('albums', this.store.findAll('album'));
  },

  actions: {
    selectGenre(obj) {
      this.model.set('genreId', obj);
    },
    selectAlbum(obj) {
      this.model.set('albumId', obj);
    },
    delete(record) {
      record.destroyRecord();
    },
  }
});
