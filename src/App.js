import './App.css';
import {Component} from 'react'
import {Switch,Route,BrowserRouter} from  'react-router-dom'
import switchContext from './switchContext'

import Login from './Login'
import Home from './Home'

class App extends Component {
  state = {patientview:true}
  
  patient = () => {
    this.setState({patientview : true})
  }

  care = () => {
    this.setState({patientview : false})
  }


render() {
  const {patientview} = this.state
  return (
    <switchContext.Provider
    value = {{
      patientView : patientview,
      patientTrue : this.patient,
      patientFalse : this.care,
    }}
    >
  <BrowserRouter>
  <Switch>
  <Route exact path = "/" component = {Login} />
  <Route exact path = "/home" component = {Home}/>
  </Switch>
  </BrowserRouter>
  </switchContext.Provider>
  )
}
}

export default App;
