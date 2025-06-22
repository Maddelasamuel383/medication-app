import './index.css'
import {Component} from 'react'
import { MdOutlinePersonOutline , MdOutlineCalendarToday,MdAccessTime} from "react-icons/md";
import { FiCircle } from "react-icons/fi";
import { FaImage } from "react-icons/fa6";
import { IoCameraOutline } from "react-icons/io5";
import { TiTick, TiTickOutline } from "react-icons/ti";
import { SiTicktick } from "react-icons/si";
import Calendar from 'react-calendar'


class PatientPage extends Component {
state = {streak : 0,status: <FiCircle/>, rate : 0,marked : false}

onTaken = () => {
  this.setState({marked : true,streak : 1, rate : 3, status : <SiTicktick/>})
}

render() {
  const {streak, status, rate,marked}= this.state

  const today = new Date();
  const formattedDate = today.toLocaleString('en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }); 

    return (
      <div className='mainContainer'>
        <div className='innerContainer'>
           <div className='topInContainer'>
             <div className='profileCon'>
              <MdOutlinePersonOutline className='logo'/>
              <div className='evening'>
                <h1>Good Evening!</h1>
                <p className='result'>Ready to stay on track with your medication?</p>
              </div>
             </div>
             <div className='bottomInContainer'>
              <div className='day'>
                <p>{streak}</p>
                <p>Day Streak</p>
              </div>
              <div className='status'>
                <p>{status}</p>
                <p>Today's Status</p>
              </div>
              <div className='rate'>
                <p>{rate}%</p>
                <p>Monthly Rate</p>
              </div>
             </div>
           </div>

           <div className='down-con'>
            <div className='photo-con'>
              <div className='logo-con'>
              <MdOutlineCalendarToday/>
                <p>Today's Medication</p>
              </div>

              {marked ? (
                <div className='marked-con'>
                  <div className='upper'>
                     <TiTickOutline className='ticked'/>
                     <h5>Medication Completed!</h5>
                     <p>Great job! You've taken medication for {formattedDate}</p>
                  </div>
                  <div className='remainderr'>
                <div className='number'>
                  <p className='noo'><TiTickOutline/></p>
                  <div className='ndes'>
                    <h5>Daily Medication Set</h5>
                    <p className='last'>Complete set of daily tablets</p>
                  </div>
                </div>
                <div className='timee'>
                  <MdAccessTime/>
                  <p>8:00AM</p>
                </div>
              </div>
                </div>

            ) : (
              <>
              <div className='remainder'>
                <div className='number'>
                  <p className='no'>1</p>
                  <div className='ndes'>
                    <h5>Daily Medication Set</h5>
                    <p>Complete set of daily tablets</p>
                  </div>
                </div>
                <div className='time'>
                  <MdAccessTime/>
                  <p>8:00AM</p>
                </div>
              </div>
              <div className='photoinputCon'>
                <FaImage/>
                <h6>Add Proof Photo (Optional)</h6>
                <p>Take a photo of your medication or pill organizer as confirmation</p>
                <p className='photoFile'><IoCameraOutline/> Take Photo <input type= "file" accept='photo'/></p>
              </div>
              <button type = "button" className='button' onClick = {this.onTaken}> <TiTick/> Mark as Taken</button>
              </>
            )}
              
            </div>

            <div className='calendar-con'>
              <h4 className='cal-des'>Medication Calendar</h4>
              <Calendar className="calendar-date"/>
              <ul className='lists'>
                <li className='one'>Medication taken</li>
                <li className='two'>Missed medication</li>
                <li className='three'>Today</li>
              </ul>
            </div>

           </div>

        </div>

      </div>
    )
}

}

export default PatientPage