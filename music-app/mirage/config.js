export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  
    // Shorthand cheatsheet:

    this.get('/songs');
    this.post('/songs');
    this.get('/songs/:id');
    this.patch('/songs/:id'); // or this.patch
    this.del('/songs/:id');


    this.get('/albums');
    this.post('/albums');
    this.get('/albums/:id');
    this.patch('/albums/:id'); // or this.patch
    this.del('/albums/:id');


    this.get('/genres');
    this.post('/genres');
    this.get('/genres/:id');
    this.patch('/genres/:id'); // or this.patch
    this.del('/genres/:id');


    this.get('/artists');
    this.post('/artists');
    this.get('/artists/:id');
    this.patch('/artists/:id'); // or this.patch
    this.del('/artists/:id');

    // https://www.ember-cli-mirage.com/docs/route-handlers/shorthands

}
