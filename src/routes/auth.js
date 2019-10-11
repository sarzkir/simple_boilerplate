import Auth from '../Auth'
import Login from '../Login'
import DashboardContainer from '../Dashboard';

const authRoutes = {
  path: '/auth',
  component: Auth,
  routes: [
    {
      path: '/auth/login',
      exact:true,
      component: Login,
      routes: [
        {
          path: '/auth/login/dashboard',
          exact: true,
          component: DashboardContainer
        }
      ]
    },
    {
      path: '/auth',
      redirectTo: '/auth/login'
    },
  ]
}

export default authRoutes