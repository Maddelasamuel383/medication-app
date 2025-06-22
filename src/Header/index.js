import './index.css'
import { RxPerson } from "react-icons/rx";
import { MdOutlinePersonOutline } from "react-icons/md";

import switchContext from '../switchContext'


const Header = () => {
    return (
    <switchContext.Consumer>
     {(value) => {
        const {patientView,patientTrue,patientFalse} = value;

        const onPerson = () => {
            patientFalse()
        }
   
        const onCare = () => {
            patientTrue()
        }

        return (
        <div className='container'>
            <div className='first-con'>
                <p className='initial'>M</p>
                <div className='head'>
                    <h3>MediCare Companion</h3>
                    {patientView ? <p className='para'>Patient View</p> : <p className='para'>Caretaker View</p>}
                </div>
            </div>
            <div>
                {patientView ? (
                    <button type = "button" className='buttons' onClick = {onPerson}> <RxPerson/> Switch to Caretaker</button>
                ) : (
                    <button type = "button" className='buttons' onClick = {onCare}> <MdOutlinePersonOutline/> Switch to Patient</button>
                )}
            </div>
        </div>
        )
     }}
    </switchContext.Consumer>
    )
}
export default Header