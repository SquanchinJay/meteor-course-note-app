import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';
import { Session } from 'meteor/session';
import history from '../imports/ui/history';

import { routes, onAuthChange } from '../imports/routes/Routes';
import '../imports/startup/simple-schema-config';

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId()
  onAuthChange(isAuthenticated)
});

Tracker.autorun(() => {
  const selectedNoteId = Session.get('selectedNoteId');

  if (selectedNoteId) {
    history.replace(`/dashboard/${selectedNoteId}`);
  }
})


Meteor.startup(() => {
  Session.set('selectedNoteId', undefined);
  ReactDOM.render(routes, document.getElementById('app'))
});