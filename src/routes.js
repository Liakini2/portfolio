import {Switch, Route} from 'react-router-dom'
import Home from './Components/Home/Home'
import Resume from './Components/Resume/Resume'
import AboutMe from './Components/AboutMe/AboutMe'

export default (
    <Switch>
        <Route exact path='/' component={AboutMe} />
        <Route path='/resume' component={Resume} />
        <Route path='/projects' component={Home} />
    </Switch>
)