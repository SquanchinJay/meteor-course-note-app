import React from 'react';

import PrivateHeader from './PrivateHeader';
import NoteList from './NoteList';

export default class Dashboard extends React.Component {

  componentWillMount() {
    if (!Meteor.userId()) {
      this.props.history.replace('/');
    }
  }

  render() {
    return (
      <div>
        <PrivateHeader title={'Dashboard'} handleLogout={() => {}} />
        <div className='page-content'>
          <NoteList />
        </div>
      </div>
    )
  }
}