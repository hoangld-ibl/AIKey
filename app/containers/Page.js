// @flow
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import * as appActions from '../actions/app-actions';

import Home from '../components/Home';

function mapStateToProps(state) {
  return {
    ...state
  };
}

function mapDispatchToProps(dispatch) {
  const actionCreators = {
    ...appActions,
  };
  return bindActionCreators(actionCreators, dispatch);
}

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(Home);

