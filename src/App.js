import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider, connect } from 'react-redux';

import store from './store';
import Posts from './containers/Posts';

class App extends Component {
 
 
  render() {
    //const { rows, status, onRequestData } = this.props;
    return (
      <Provider store={store}>
        <div className="App">
         <Posts />
        </div>
      </Provider>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     rows: state.posts.items,
//     status: state.posts.status
//   }
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     onRequestData: () => {
//       return dispatch({ type: "FETCH_POSTS" })
//     }
//   }
// };

// const mapStateToProps = state => {
//   return {
//   }
// };

// const mapDispatchToProps = dispatch => {
//   return {
//   }
// };
// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;