import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';

import { connect } from "react-redux";

import store from './store';

class App extends Component {
  constructor(props){
    super(props)
    console.log("props : ", props)
  }
  componentDidMount(){
    console.log("state", this.state)
  }
  componentWillReceiveProps(nextProps){
    console.log("nxt", nextProps)
  }
  render() {
    const { items, status, onRequestData } = this.props;
    return (
      <Provider store={store}>
        <div className="App">
          <button onClick={onRequestData}>Request Data</button>
          <div>
            <span>{status}</span>
            { Array.isArray(items) ? items.map(function(item){
              {item}
            }): "nada" }
          </div>
        </div>
      </Provider>
    );
  }
}


const mapStateToProps = state => {
  return {
    items: state.items,
    status: state.status
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestData: () => {
      console.log("dispatching fetch posts now");
      return dispatch({ type: "FETCH_POSTS" })
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
