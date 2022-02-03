import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { PublicRouter } from './PublicRouter';
import { PrivateRoute } from './PrivateRoute';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRouters } from './DashboardRouters';

export const AppRouter = () => {
  return (
    <BrowserRouter >

      <Routes>
        {/* <Route path="/login" element={<LoginScreen />} /> */}
        <Route path="/login" element={
          <PublicRouter >
            <LoginScreen />
          </PublicRouter>
        }
        />

        <Route path="/*" element={
          <PrivateRoute >
            <DashboardRouters />
          </PrivateRoute>
        }
        />
        {/* <Route path="/*" element={<DashboardRouters />} /> */}
      </Routes>

    </BrowserRouter >
  )
}
