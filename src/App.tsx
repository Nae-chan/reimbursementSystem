import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import { store } from './Store';
import { Provider } from 'react-redux';
import { NavComponent } from './components/navBar/nav.component';
import { HomeComponent } from './components/home/home.component';
import { SignInComponent } from './components/home/sign-in.component';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavComponent />
        <div id="main-constent-container">
          <Switch>
            <Route path="/home" component={HomeComponent} />
            <Route path="/sign-in" component={SignInComponent} />
            <Route path="/users" component={SignInComponent} />
            <Route component={HomeComponent} />
          </Switch>

        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
