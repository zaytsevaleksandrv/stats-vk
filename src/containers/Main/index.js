import React from 'react';
import { connect } from 'react-redux';
import Main from './presenter';

function mapStateToProps(state) {
    const tracks = state.track;
    return {
        tracks
    }
}

export default connect(mapStateToProps)(Main);