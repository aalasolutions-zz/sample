import Model, {attr, belongsTo, hasMany} from '@ember-data/model';

export default Model.extend({

  title: attr('string'),
  length: attr('string'),
  artists: hasMany('artist'),
  genreId: belongsTo('genre'),
  albumId: belongsTo('album'),

  pinRelationships() {
    let pinnedRelationships = {
      artists: this.get('artists').toArray()
    };

    this.set('_pinnedRelationships', pinnedRelationships);
  },

  rollbackRelationships() {
    let items = this.get('_pinnedRelationships.artists');
    this.set('artists', items);
  }
});
