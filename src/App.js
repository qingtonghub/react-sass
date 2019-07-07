import React, { Component } from 'react';
import routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Switch routes={routes}>
            {
              routes.map((route, i) => (
                <Route
                  exact={route.exact}
                  key={i}
                  path={route.path}
                  component={route.component}
                />
              ))
            }
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
