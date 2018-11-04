import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import * as Routes from '@constants/routes';

import Home from './screens/Home';

function Dashboard() {
  return (
    <Switch>
      <Route exact path={Routes.HOME} component={Home} />
      <Route component={<Redirect to={Routes.HOME} />} />
    </Switch>
  );
}

Dashboard.defaultProps = {
  loading: false
};

export default connect()(Dashboard);
