import { BrowserRouter, Routes, Route } from 'react-router-dom';

import routes from '../routes';

import Root from './Root';
import NotFound from './NotFound';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import PrivateRoute from './PrivateRoute';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path={routes.chatPage()} element={<Root />}>
        <Route index element={<PrivateRoute />} />
        <Route path={routes.loginPage()} element={<LoginPage />} />
        <Route path={routes.signupPage()} element={<SignupPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
