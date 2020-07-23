import React from 'react';
import {connect} from 'react-redux'
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import './App2.css'
import './App.css';
import * as action from './store/actions/index'
import {resize} from './utils/common/common'
import {checkSessionStorage} from './utils/sessiondata/sessionsStorage'
import Navbar from './components/Navbar/Navbar'
import TopLayOver from './components/TopLayover/TopLayover'
import Menu from './components/MenuContainer/MenuContainer'
import {findRoute} from './utils/data/routeData'
// import {scrollEffect} from './utils/pageAnimation/smoothScrollEffect'
import {resizeProjectWrapper} from './utils/pageAnimation/projectsHoverAnimations'


class App extends React.Component {

  constructor(props){
    super(props);
    this.active = 'home';
  }
  
  async componentDidMount(){
    // // resize the window upon loading
    resize()
    // resize the window when screen is resized
    window.addEventListener('resize', resize)
    
    resizeProjectWrapper(this.props.activeRoute)
    // check current pagelocation to render page data
    // this.props.checkPage()
    
    let session = await checkSessionStorage()
    this.props.checkBrowserSession(session)

    // scrollEffect()
  }
  
  render(){ 
    return (
      <div className="container">
        <TopLayOver/>
        <div className="main-container">
          <Navbar />       
          <Menu />
          <Router>
            <Switch>
              {findRoute(this.props.redirect)}
            </Switch>
          </Router>
        </div>      
      </div>
    )
  }
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
    // checkPage: () => {dispatch(action.checkPageLocation())},
    checkBrowserSession: (val) => {dispatch(action.checkBrowserSession(val))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
