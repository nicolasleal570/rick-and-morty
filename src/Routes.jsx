import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CharacterPage from './pages/CharacterPage';
import FavoritesPage from './pages/FavoritesPage';

import PrivateRoute from './components/ProtectedRoutes/PrivateRoute';

function Routes() {
  return (
    <Switch>
      <Route exact path="/characters/:characterId" component={CharacterPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/register" component={RegisterPage} />

      {/* Protected Route */}
      <PrivateRoute exact path="/favorites" component={FavoritesPage} />

      <Route exact path="/" component={HomePage} />
      <Route path="*">
        <h1>404 Not found</h1>
      </Route>
    </Switch>
  );
}

export default Routes;
