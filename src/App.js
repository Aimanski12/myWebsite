import React from 'react';
import {connect} from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import './App2.css'
import './App.css';
import * as action from './store/actions/index'
import {resize} from './utils/common/common'
import {checkSessionStorage} from './utils/sessiondata/sessionsStorage'
import Navbar from './components/Navbar/Navbar'
import TopLayOver from './components/TopLayover/TopLayover'
import Menu from './components/MenuContainer/MenuContainer'
import Home from './containers/Home/Home'
import About from './containers/About/About'
import Projects from './containers/Projects/Projects'
import Contacts from './containers/Contacts/Contacts'
import Credentials from './containers/Credentials/Credentials'
import Privacy from './containers/Privacy/Privacy'
import NotFound from './containers/NotFound/NotFound'

class App extends React.Component {

  constructor(props){
    super(props);
    this.active = 'home'
  }

  async componentDidMount(){
    // // resize the window upon loading
    // resize()
    // resize the window when screen is resized
    window.addEventListener('resize', resize)

    // check current pagelocation to render page data
    this.props.checkPage()

    let session = await checkSessionStorage()
    this.props.checkBrowserSession(session)

  }

  
  render(){ 
    
    // console.log(this.props.state)
    
  return (
    <div className="container">
      <TopLayOver/>
      <div className="main-container">
        <Navbar />       
        <Menu />

        <Router>
          <Switch>
            <Route exact path='/'>
              { this.props.redirect.isTrue ? 
                <Redirect to={this.props.redirect.pathname} /> : null }
              <Home />
            </Route>
            <Route path='/about'>
              { this.props.redirect.isTrue ? 
                  <Redirect to={this.props.redirect.pathname} /> : null}
              <About />
            </Route>
            <Route path='/projects'>
              { this.props.redirect.isTrue ? 
                  <Redirect to={this.props.redirect.pathname} /> : null}
              <Projects />
            </Route>  
            <Route path='/contacts'>
              { this.props.redirect.isTrue ? 
                  <Redirect to={this.props.redirect.pathname} /> : null}
              <Contacts />
            </Route>
            <Route path='/credentials'>
              { this.props.redirect.isTrue ? 
                  <Redirect to={this.props.redirect.pathname} /> : null}
              <Credentials />
            </Route>
            <Route path='/privacy'>
              { this.props.redirect.isTrue ? 
                <Redirect to={this.props.redirect.pathname} /> : null}
              <Privacy />
            </Route>
            <Route path='*' component={NotFound} >
              { this.props.redirect.isTrue ? 
                <Redirect to={this.props.redirect.pathname} /> : null}
            </Route>
            <Route path='*/*' component={NotFound} >
              { this.props.redirect.isTrue ? 
                <Redirect to={this.props.redirect.pathname} /> : null}
            </Route>
          </Switch>
        </Router>
      </div>      
    </div>
  )}
}

const mapStateToProps = (state) => {
  return {
    activeRoute : state.state.activeRoute,
    redirect : state.state.redirect,
    state: state.state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    checkPage: () => {dispatch(action.checkPageLocation())},
    checkBrowserSession: (val) => {dispatch(action.checkBrowserSession(val))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
