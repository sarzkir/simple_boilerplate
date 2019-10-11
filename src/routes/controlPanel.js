import ControlPanel from '../ControlPanel'
import DashboardContainer from '../Dashboard';
import Login from '../Login';

const controlPanelRoutes = {
  path: '/cp',
  component: ControlPanel,
  routes: [
    {
      path: '/cp/dashboard',
      component: DashboardContainer
    },
    {
      path: '/cp',
      redirectTo: '/cp/dashboard',
      exact:true
    }
  ]
}

export default controlPanelRoutes