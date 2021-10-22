import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CharacterPage from './pages/CharacterPage';

function Routes() {
  return (
    <Switch>
      <Route exact path="/characters/:id" component={CharacterPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/register" component={RegisterPage} />
      <Route exact path="/" component={HomePage} />
      <Route path="*">
        <h1>404 Not found</h1>
      </Route>
    </Switch>
  );
}

export default Routes;
