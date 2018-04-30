import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TableContainer from './App/containers/TableContainer/TableContainer';
import TableDetailComponent from './App/components/TableDetailComponent/TableDetailComponent';

import { store } from './store';

const NoMatch = ({location}) => (
    <div>
        <h3>
            No match for <code>{location.pathname}</code>
        </h3>
    </div>
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Router>
              <Switch>
                  <Route exact path="/" component={TableContainer}/>
                  <Route exact path="/:id" component={TableDetailComponent}/>
                  <Route patth component={NoMatch} />
              </Switch>
          </Router>
      </Provider>
    );
  }
}

export default App;
