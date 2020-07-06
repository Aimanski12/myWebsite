import React from 'react';
import {connect} from 'react-redux'
import * as action from './store/actions/index'
import './App.css';
import {resize} from './utils/common/common'
import Navbar from './components/Navbar/Navbar'
import TopLayOver from './components/TopLayover/TopLayover'
import Menu from './components/MenuContainer/MenuContainer'

class App extends React.Component {

  constructor(props){
    super(props);
    this.active = 'home'
  }

  componentDidMount(){
    resize()
    window.addEventListener('resize', resize)
    this.props.checkPage()
    setTimeout(()=>{
      this.props.isSeen(true, 123123)
    }, 8000)
  }
  
render(){ 
  return (
    <div className="container">
      <TopLayOver/>
      <div className="main-container">
        <Navbar />       
        <Menu />

        <div className="content-center header"><a href="/">click me</a></div>
        <div className="div one"></div>
        <div className="div two"></div>
      </div>      
    </div>
  )}
}

const mapStateToProps = (state) => {
  return {
    activeRoute : state.state.activeRoute,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    checkPage: () => {dispatch(action.checkPageLocation())},
    isSeen: (val, id) => {dispatch(action.isSeen(val, id))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
