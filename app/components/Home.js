// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';
import reducers from '../reducers';
import { persistStore } from 'redux-persist';
import {store} from '../store/configureStore.dev';

const address = '15kHBARv1ZaCrmyExVUn6Uh7wnJVXveF8A';

export default class Home extends Component {
  constructor(props, context) {
    super(props, context);
    this.runTime = null;
    this.state = {
      newKeys: [],
    }
  }

  readData() {
    let self = this;
    persistStore(store, {}, () => {
      console.log(' ############### {REHYDRATE complete} ############### ');
      let { newKeys } = this.props;
      // this.setNewKeysLop();
      this.setState({
        newKeys: newKeys.data.slice(0, 30)
      });
      console.log(this.state.newKeys)
    });
  };

  componentWillMount() {
    this.readData();
  }

  setNewKeysLop() {
    if (this.runTime) {
      clearInterval(this.runTime);
    }
    let { setNewKeys } = this.props;
    this.runTime = setInterval(function () {
      setNewKeys();
    }, 500);
  }

  renderNewKeys() {
    return (
      <table>
        <tbody>
          {
            this.state.newKeys.map((row, index) => {
              return (
                <tr key={index}>
                  <td>{row.privateKey}</td>
                  <td>{row.address}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    )
  }

  render() {

    return (
      <div>
        <div className={styles.container} data-tid="container">
          {this.renderNewKeys()}
        </div>
      </div>
    );
  }
}
