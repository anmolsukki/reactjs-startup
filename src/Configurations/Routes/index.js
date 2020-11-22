import React, { Fragment } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { Slug } from '../Slug';
import Header from '../../Common/Header';
import HomePage from '../../Pages/HomePage';
import AboutPage from '../../Pages/AboutPage';

const Routes = () => {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path={Slug.home} component={HomePage} />
        <Route exact path={Slug.about} component={AboutPage} />
      </Switch>
    </Fragment>
  );
};

export default withRouter(Routes);
