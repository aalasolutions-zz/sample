export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  // server.createList('album', 10);
  server.loadFixtures();

  // server.createList('song', 10);
  // server.createList('genre', 10);
  // server.createList('artist', 10);
  // server.createList('album', 10);
}
