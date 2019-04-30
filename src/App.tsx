import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import './include/bootstrap';
import { store } from './Store';
import { Provider } from 'react-redux';
import { NavComponent } from './components/navBar/nav.component';
import { HomeComponent } from './components/home/home.component';
import { SignInComponent } from './components/home/sign-in.component';
import { ReimbursementComponent } from './components/reimbursements/reimbursements.component';

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
            <Route path="/reimbursements" component={ReimbursementComponent} />
            <Route component={HomeComponent} />
          </Switch>

        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
