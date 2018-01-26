import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import { createContainer } from 'meteor/react-meteor-data';
import { withRouter } from 'react-router-dom';

import { Notes } from '../api/notes';
import NoteListHeader from './NoteListHeader';
import NoteListItem from './NoteListItem';
import NoteListEmptyItem from './NoteListEmptyItem';

export class NoteList extends React.Component {

  componentWillMount() {    
    if (!Meteor.userId()) {
      this.props.history.replace('/')
    } else {
      Session.set('selectedNoteId', this.props.match.params.id);
    }
  }

  render() {
    return (
      <div>
        <NoteListHeader />
        {this.props.notes.length > 0 
          ? this.props.notes.map((note) => <NoteListItem key={note._id} note={note}/>) 
          : <NoteListEmptyItem/>}
        NoteList { this.props.notes.length }
      </div>
    );
  }
};

NoteList.propTypes = {
  notes: PropTypes.array.isRequired
}

export default ContainerWithRouter = withRouter(createContainer(() => {
  const selectedNoteId = Session.get('selectedNoteId');
  Meteor.subscribe('notes');

  return {
    notes: Notes.find().fetch().map((note) => { 
      return {
        ...note,
        selected: selectedNoteId === note._id
      }
    })
  }
}, NoteList));
