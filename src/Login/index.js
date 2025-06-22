import './index.css'
import {Link} from 'react-router-dom'
import { FaRegHeart } from "react-icons/fa";
import { RxPerson } from "react-icons/rx";
import { MdOutlinePersonOutline } from "react-icons/md";
import switchContext from '../switchContext'

const Login = () => {
  return (
  <switchContext.Consumer>
    { value => {
      const {patientTrue,patientFalse} = value
      const patient = () => {
        patientTrue()
      }
      const caretaker = () => {
        patientFalse()
      }
     return (
    <div className='container'>
      <div>
      <div className = "logo-con">
      <FaRegHeart className= "logo"/>  
      </div>   
     
     <div>
     <h1>Welcome to MediCare Companion </h1>  
     <h4 className = "description">Your trusted partner in medication management. Choose your role to get <br/>started with personalized features</h4>
     </div>
     
     <div className='inner-con'>
      <div className='patient-con'>
        <div className='person'>
          <RxPerson className='plogo'/>
        </div>
        <h1 className='pat'>I'm a Patient</h1>
        <p>Track your medication schedule and maintain your <br/>health records</p>
        <div className='lists-con'>
        <ul>
         <li className='bullet-item'>Mark medications as taken</li>
         <li className='bullet-item'>Upload proof photos (optional)</li>
         <li className='bullet-item'>View your medication calender</li>
         <li className='bullet-item'>Large, easy-to-use interface</li>
        </ul>
        </div>
        <Link to ="/home">
        <button className='button' onClick = {patient}>Continue as Patient</button>
        </Link>
      </div>

      <div className='caretaker-con'>
         <div className='persons'>
          <MdOutlinePersonOutline className='clogo'/>
         </div>
         <h1 className='care'>I'm a Caretaker</h1>
        <p>Monitor and support your loved one's medication <br/>adherence</p>
        <div className='lists-cons'>
        <ul>
         <li className='bullet-items'>Monitor medication compliance</li>
         <li className='bullet-items'>Set up notification preferences</li>
         <li className='bullet-items'>View detailed reports</li>
         <li className='bullet-items'>Receive email alerts</li>
        </ul>
        </div>
        <Link to ="/home">
        <button className='buttons' onClick={caretaker}>Continue as Caretaker</button>
        </Link>
      </div>
     </div>
     <p>You can switch between roles anytime after setup</p>
     </div>
    </div>
     )
    }}
    </switchContext.Consumer>
 )
}

export default Login
