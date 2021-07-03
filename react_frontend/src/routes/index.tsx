import React from 'react'
import { Switch, Route} from 'react-router-dom'
import Alterar from '../pages/Alterar'
import Dashboard from '../pages/Dashboard'
import Detalhes from '../pages/Detalhes'

const Routes: React.FC = () => (
  <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/detalhes/:id" component={Detalhes} />
      <Route path="/alterar/:id" component={Alterar}/>
  </Switch>
)

export default Routes
