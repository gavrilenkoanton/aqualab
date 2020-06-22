import React from 'react';
import styles from './App.module.scss';
import NavBar from "./components/navBar/NavBar";
import neon from './sound/neon.mp3'
import {BrowserRouter, Route} from "react-router-dom";
import HomePage from "./components/homePage/HomePage";
import Price from "./components/price/Price";
import CallBack from "./components/callMeBack/CallBack";
import Gift from "./components/gift/Gift";
import MapComponent from "./components/map/MapComponent";

class App extends React.Component {

  state = {
    showNavBar: true,
    logoNeon: false
  }

  neon = new Audio(neon)

  menuClickHandle = () => {
    this.setState({showNavBar: !this.state.showNavBar})
  }
  logoToggleHandle = () => {
    this.setState({logoNeon: !this.state.logoNeon})
    if (this.state.logoNeon) {
      this.neon.pause()
    } else {

      this.neon.play()
    }
  }
  // className={` ${this.state.showNavBar ? styles.app : styles.appDark}`}
  render() {

    return (
      <BrowserRouter>
        <div>
          <NavBar
            menuClickHandle={this.menuClickHandle}
            logoToggleHandle={this.logoToggleHandle}
            showNavBar={this.state.showNavBar}
            logoNeon={this.state.logoNeon}
          />
          <Route path='/' exact render={() => <HomePage logoNeon={this.state.logoNeon}/>}/>
          <Route path='/aqualab' exact render={() => <HomePage logoNeon={this.state.logoNeon}/>}/>
          <Route path='/price' exact render={() => <Price/>}/>
          <Route path='/callback' exact render={() => <CallBack/>}/>
          <Route path='/gift' exact render={() => <Gift/>}/>
          <Route path='/map' exact render={() => <MapComponent/>}/>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
