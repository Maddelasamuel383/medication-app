import './index.css'

import { Component } from 'react'
import switchContext from '../switchContext'
import PatientPage from '../patientPage'
import CareTaker from '../careTaker'
import Header from '../Header'

class Home extends Component {
    componentDidMount() {
        document.title = "meds-buddy-check"
    }

    render() {

        return (
          <switchContext.Consumer>
            {value => {
                const {patientView} = value 
                return (
                    <div className='home-container'>
                  {patientView ? (
                    <div className='home-patient-con'>
                      <Header/>
                    <PatientPage/>
                    </div>
                    ) : (
                    <div className='home-caretaker-con'>
                      <Header/>
                    <CareTaker/>
                    </div>
                    )}
                  </div>
                )
            }}
          </switchContext.Consumer>
        )
    }
}

export default Home