import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import NotFound from '../views/NotFound';

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        {/* <PrivateRoute
          exact
          path='/drivers'
          user={user}
          component={() => <Racers racers={racers}
          setRacers={setRacers} user={user}/>}
        />
        <PrivateRoute
          path='/drivers/:firebaseKey'
          user={user}
          component={SingleRacer}
        />
        <PrivateRoute
          path='/add-drivers'
          user={user}
          component={() => <AddRacer setRacers={setRacers} user={user}/>}
        /> */}
        <Route path='*' component = {NotFound} />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  user: PropTypes.any
};
