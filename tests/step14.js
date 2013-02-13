/*
  In Step 14, you will highlight the currently playing song with a yellow
  background. This will make it easy for your users to spot at a glance
  where in the album they are.

  To make this work, you'll need to create a new controller for each of
  the songs in the album list. You can do this easily using the {{#each}}
  helper's itemController option.

  It works like this:

      {{#each people itemController="person"}}
        {{firstName}} {{lastName}}
      {{/each}}

  Now, for each Person model in the list, an App.PersonController
  instance is created, and its model property is set to the associated
  model.

  In your app, you'll want to make an App.SongController that has a
  computed property that determines if song model it represents is the
  currently playing song.

  Then, in your album template, use bindAttr to bind the tr element's
  class to the computed property you just defined. When the song is
  the currently playing song, the tr should get the class name
  "is-playing".

  One note: there is currently a bug in Ember that will probably
  trip you up. We're very sorry about this. For the time being, please
  ensure you put this code in your app.js:

      App.ApplicationRoute = Ember.Route.extend({
        setupController: function() {
          this.controllerFor('nowPlaying');
        }
      });

  If you're curious, this ensures that the NowPlayingController gets
  created as a global singleton. We should have a fix for this soon,
  so don't worry about it too much.

  One other note: the play method you implemented earlier will need to
  be modified slightly. Because it will now be passed a controller
  instead of the raw model, make sure you extract the model from the
  SongController before setting the NowPlayingController's model.
*/

step(14, "Highlight Current Song");

test("When a song is playing, it becomes highlighted", function() {
  click('.album:first a');
  click('td.song-track:first .play');

  shouldHaveElement('tr.is-playing', "A Walk", "tr element for currently playing song has the class name is-playing");

  click('td.song-track:eq(1) .play');
  shouldHaveElement('tr.is-playing', "Hours", "tr element for currently playing song has the class name is-playing");
  shouldHaveElements('tr.is-playing', 1);
});

