import { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { UserContext } from '../../context/UserContext';

const PrivateRoute = ({ component: View, ...args }) => {
  const { user } = useContext(UserContext);

  const isLoggedIn = !!user;

  if (isLoggedIn) {
    return <Route {...args} render={() => <View />} />;
  }

  return (
    <Route
      {...args}
      render={({ location }) => (
        <Redirect to={{ pathname: 'login', state: { from: location } }} />
      )}
    />
  );
};

export default PrivateRoute;
