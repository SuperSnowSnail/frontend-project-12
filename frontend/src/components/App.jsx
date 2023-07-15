import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Root from './Root';
import NotFound from './NotFound';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import PrivateRoute from './PrivateRoute';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<PrivateRoute />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
