import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom'

import TopPage from './TopPage'
import AboutPage from './AboutPage'
import SkillPage from './SkillPage'
import WorksPage from './WorksPage'
import ContactPage from './ContactPage'

const App = () =>  (
    <Router>
      <div className="app">
        <header>
          <nav>
            <ul className="navi-ul">
              <li className="top transition"><Link to="/myportfolio">Top</Link></li>
              <li className="about transition"><Link to="/myportfolio/about">About</Link></li>
              <li className="skill transition"><Link to="/myportfolio/skill">Skill</Link></li>
              <li className="works transition"><Link to="/myportfolio/works">Works</Link></li>
              <li className="contact transition"><Link to="/myportfolio/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route exact path="/" component={TopPage}></Route>
          <Route exact path="/myportfolio" component={TopPage}></Route>
          <Route exact path="/myportfolio/about" component={AboutPage}></Route>
          <Route exact path="/myportfolio/skill" component={SkillPage}></Route>
          <Route exact path="/works" component={WorksPage}></Route>
          <Route exact path="/myportfolio/contact" component={ContactPage}></Route>
        </Switch>
      </div>
    </Router>
)

export default App
