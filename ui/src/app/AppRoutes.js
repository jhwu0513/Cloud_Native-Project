import React, { Component, Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';

const Homepage = lazy(() => import('./homepage/Homepage'));

// cloud_native new
const Electricity = lazy(() => import('./electricity/Electricity'));
const Earthquake = lazy(() => import('./earthquake/Earthquake'));
const Reservoir = lazy(() => import('./reservoir/Reservoir'));
// cloud_native new End of Route const

// const Buttons = lazy(() => import('./basic-ui/Buttons'));
// const Dropdowns = lazy(() => import('./basic-ui/Dropdowns'));
// const Typography = lazy(() => import('./basic-ui/Typography'));

// const BasicElements = lazy(() => import('./form-elements/BasicElements'));

// const BasicTable = lazy(() => import('./tables/BasicTable'));

// const Mdi = lazy(() => import('./icons/Mdi'));

// const ChartJs = lazy(() => import('./charts/ChartJs'));

const Error404 = lazy(() => import('./error-pages/Error404'));
const Error500 = lazy(() => import('./error-pages/Error500'));

const Login = lazy(() => import('./user-pages/Login'));
const Register1 = lazy(() => import('./user-pages/Register'));


class AppRoutes extends Component {
  render() {
    return (
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/homepage" component={Homepage} />
          {/* cloud_native new Route */}
          <Route exact path="/electricity" component={Electricity} />
          <Route exact path="/earthquake" component={Earthquake} />
          <Route exact path="/reservoir" component={Reservoir} />
          {/* cloud_native new End of Route */}
          {/* <Route path="/basic-ui/buttons" component={ Buttons } />
          <Route path="/basic-ui/dropdowns" component={ Dropdowns } />
          <Route path="/basic-ui/typography" component={ Typography } />

          <Route path="/form-Elements/basic-elements" component={ BasicElements } />

          <Route path="/tables/basic-table" component={ BasicTable } />

          <Route path="/icons/mdi" component={ Mdi } />

          <Route path="/charts/chart-js" component={ ChartJs } /> */}


          <Route path="/user-pages/login-1" component={Login} />
          <Route path="/user-pages/register-1" component={Register1} />

          <Route path="/error-pages/error-404" component={Error404} />
          <Route path="/error-pages/error-500" component={Error500} />


          <Redirect to="/homepage" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;