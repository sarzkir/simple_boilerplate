import controlPanelRoutes from './controlPanel'
import authRoutes from './auth'

import NotFound from '../NotFound'

const routes = [
  { ...authRoutes },
  { ...controlPanelRoutes },
  {
    path: '*',
    component: NotFound
  }
]

console.log("[routes]", routes)

export default routes