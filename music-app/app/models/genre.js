import Model, {attr, hasMany} from '@ember-data/model';

export default Model.extend({

  title: attr('string'),
  songs: hasMany('song', {inverse: "genreId", async: false}),


  // pinRelationships() {
  //     let pinnedRelationships = {
  //         songs: this.get('songs').toArray()
  //     };

  //     this.set('_pinnedRelationships', pinnedRelationships);
  // },

  // rollbackRelationships() {
  //     let items = this.get('_pinnedRelationships.songs');
  //     this.set('songs', items);
  // }
});
