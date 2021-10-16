import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('dashboard', function () {
    this.route('songs', function () {
      this.route('form', {path: 'form/:id'});
    });
    this.route('albums', function () {
      this.route('form', {path: 'form/:id'});
    });
  });
});
