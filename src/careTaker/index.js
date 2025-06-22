import './index.css'
import {Component} from 'react'
import { MdOutlinePerson4, MdOutlineCalendarToday, MdOutlineMail} from "react-icons/md";
import { IoNotificationsOutline, IoCameraOutline } from "react-icons/io5";
import {TiTickOutline } from "react-icons/ti";
import { IoWarningOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import Calendar from 'react-calendar'
import { FiBell } from "react-icons/fi";
import { BsToggleOn , BsToggleOff} from "react-icons/bs";

import AdherenceProgress from '../Report'

const statusConstants = {
    over : 'OVER',
    recent : 'RECENT',
    calender : 'CALENDER',
    notification : 'NOTIFICATION' 
}

const today = new Date();
  const formattedDate = today.toLocaleString('en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }); 

class CareTaker extends Component {
    state= {toggle1 : true,toggle2 : true,status :statusConstants.over , overview : true, recentactivity:false,calenderview:false,notifications:false}
    
    onTab1 = () => {
        this.setState({status : statusConstants.over,overview:true,recentactivity:false, calenderview:false,notifications:false})
    }

    onTab2 = () => {
        this.setState({status : statusConstants.recent, overview:false,recentactivity:true, calenderview:false,notifications:false})
    }

    onTab3 = () => {
        this.setState({status : statusConstants.calender, overview:false,recentactivity:false, calenderview:true,notifications:false})
    }

    onTab4 = () => {
        this.setState({status : statusConstants.notification, overview:false,recentactivity:false, calenderview:false,notifications:true})
    }

    onAlert = () => {
        alert("Remainder email send to Eleanor Thompson")
    }

    onNoti = () => {
        this.setState({status : statusConstants.notification, overview:false,recentactivity:false, calenderview:false,notifications:true})
    }

    onCale = () => {
        this.setState({status : statusConstants.calender, overview:false,recentactivity:false, calenderview:true,notifications:false})
    }

    onT = () => {
        this.setState({toggle1: false})
    }

    onOff = () => {
        this.setState({toggle1: true})
    }

    onTT = () => {
        this.setState({toggle2: false})
    }

    onOfff = () => {
        this.setState({toggle2: true})
    }

    onBottomResult = () => {
        const {status} = this.state
        switch (status) {
            case statusConstants.over :
                return this.onOverResult()
            case statusConstants.recent :
                return this.onRecentResult()
            case statusConstants.calender :
                return this.oncalenderResult()
            case statusConstants.notification :
                return this.onNotificationResult()
            default :
                return null    
        }
    }

    onNotificationResult = () => {
        const {toggle1,toggle2} = this.state
        return (
            <div className='man-con'>
        <div className='not-con'>
            <h4><FiBell/> Notification Preferences</h4>
            <div className='emai'>
                <h4>Email Notification</h4>
                {toggle1 ? <button onClick = {this.onT} className='tbuttons'><BsToggleOn className='onOff'/></button> : <button className='tbuttons' onClick ={this.onOff}><BsToggleOff className='onOff'/></button>}
            </div>
            <p>Receive medication alerts via email</p>
            {toggle1 ? (
                    <div className='mail'>
                      <h5>Email Address</h5>
                      <input type = "email" className='email-input-con' placeholder='caretaker@example.com'/>
                    </div>
                ) : (
                    null
                )}
                <hr className='line'/>
            <div className='emai'>
                <h4>Missed Medication Alerts</h4>
                {toggle2 ? <button onClick = {this.onTT} className='tbuttons'><BsToggleOn className='onOff'/></button> : <button className='tbuttons' onClick ={this.onOfff}><BsToggleOff className='onOff'/></button>}
            </div>
            <p>Get notified when medication is not taken on time</p>
            {toggle2 ? (
                    <div className='mail'>
                      <h5>Alert me if medication isn't taken within</h5>
                      <select className='email-input-con'>
                        <option value="1 hours">1 hours</option>
                        <option value="2 hours">2 hours</option>
                        <option value="3 hours">3 hours</option>
                        <option value="4 hours">4 hours</option>
                        <option value="5 hours">5 hours</option>
                      </select>
                      <h5>Daily remaindeer time</h5>
                      <input type = "email" className='email-input-con' placeholder='20:00'/>
                      <p>Time to check if today's medication was taken</p>
                    </div>
                ) : (
                    null
                )} 

            </div>

            <div className='preview-con'>
                <h3><MdOutlineMail className='mail-logo'/> Email Preview</h3>
                <div className='preview'>
                <h5>Subject: Medication Alert - Eleanor Thompson</h5>
                <p>Hello,<br/>
                This is a remainder that Eleanor Thompson has not taken her medication today.<br/>
                Please check with her to ensure she takes her prescribed medication.<br/>
                current adherence rate: 85% (5-day streak)
                </p>
                </div>
                <button type = "button" className='last-btn'>Save Notification Settings</button>
            </div>

        </div>
    )
}

    oncalenderResult = () => (
        <div className='calendar-con'>
            <div className='coverview'>
                <h3>Medication Calender Overview</h3>
                <Calendar className='calender-view'/>
                <ul className='lists'>
                    <li className='onee'>Medication taken</li>
                    <li className='two'>Missed medication</li>
                    <li className='three'>Today</li>
                </ul>
            </div>
            <div className='right-view'>
                <p>Details for {formattedDate}</p>
                <div className='inner-view'>
                    <h5><FaRegClock/> Today</h5>
                    <p>Monitor Eleanor Thompson's medication status for today.</p>
                </div>
            </div>
        </div>
    )

    onRecentResult = () => (
        <div className='recent-con'>
            <h4>Recent Medication Activity</h4>
            <div className='activities'>
                <div className='one'>
                <TiTickOutline className='activity-tick'/>
                <div className='activity-des'>
                    <h5>Monday, June 10</h5>
                    <p>Taken at 8:30 AM</p>
                </div>
                </div>
                <div className='right-activity'>
                   <p className='pcon'> <IoCameraOutline/> Photo</p>
                   <p className='complete'>Completed</p>
                </div>
            </div>
            <div className='activities'>
                <div className='one'>
                <TiTickOutline className='activity-tick'/>
                <div className='activity-des'>
                    <h5>Sunday, June 9</h5>
                    <p>Taken at 8:15 AM</p>
                </div>
                </div>
                <div className='right-activity'>
                   <p className='complete'>Completed</p>
                </div>
            </div>
            <div className='activities'>
                <div className='one'>
                <IoWarningOutline className='activity-tickk'/>
                <div className='activity-des'>
                    <h5>Saturday, June 8</h5>
                    <p>Medication missed</p>
                </div>
                </div>
                <div className='right-activity'>
                   <p className='completem'>Missed</p>
                </div>
            </div>
            <div className='activities'>
                <div className='one'>
                <TiTickOutline className='activity-tick'/>
                <div className='activity-des'>
                    <h5>Friday, June 7</h5>
                    <p>Taken at 8:45 AM</p>
                </div>
                </div>
                <div className='right-activity'>
                   <p className='pcon'> <IoCameraOutline/> Photo</p>
                   <p className='complete'>Completed</p>
                </div>
            </div>
            <div className='activities'>
                <div className='one'>
                <TiTickOutline className='activity-tick'/>
                <div className='activity-des'>
                    <h5>Thursday, June 6</h5>
                    <p>Taken at 8:20 AM</p>
                </div>
                </div>
                <div className='right-activity'>
                   <p className='complete'>Completed</p>
                </div>
            </div>
        </div>

    )

    onOverResult = () => (
        <div className='overViewResponse'>
            <div className='top'>
                <div className='leftt-con'>
                    <div className='today-status'>
                       <MdOutlineCalendarToday/>
                       <h4>Today's Status</h4>
                    </div>
                    <div className='medication-set'>
                        <div className='front'>
                            <h5>Daily Medication Set</h5>
                            <p>8:00 AM</p>
                        </div>
                        <div className='pending'>
                            <p>Pending</p>
                        </div>
                    </div>
                </div>
                <div className='quick-con'>
                    <h3>Quick Actions</h3>
                    <button type = "button" className='action-btns' onClick = {this.onAlert}><MdOutlineMail/> Send Remainder Email</button>
                    <button type = "button" className='action-btns' onClick={this.onNoti}><IoNotificationsOutline/> Configure Notifications</button>
                    <button type = "button" className='action-btns' onClick={this.onCale}><MdOutlineCalendarToday/> View Full Calender</button>
                </div>
            </div>
            <div className='graph'>
                <AdherenceProgress/>
            </div>
        </div>
    )

    render() {
        const {overview,recentactivity,calenderview,notifications}= this.state  
        const overClass = overview ? 'after' : 'before'
        const recentClass = recentactivity ? 'after' : 'before'
        const calenderClass = calenderview ? 'after' : 'before'
        const notificationClass = notifications ? 'after' : 'before'
        
         return (
            <div className='container'>
                <div className='inner-con'>
                    <div className='top-con'>
                        <div className='profile'>
                           <div>
                            <MdOutlinePerson4 className='logo'/>
                           </div>
                           <div className='logo-des'>
                            <h4>Caretaker Dashboard</h4>
                            <p>Morning Eleanor Thompson's medication adherence</p>
                           </div>
                        </div>
                        <div className='data-con'>
                            <div className='rate-con'>
                                <p>85%</p>
                                <p>Adherence Rate</p>
                            </div>
                            <div className='rate-con'>
                                <p>5</p>
                                <p>Currect Streak</p>
                            </div>
                            <div className='rate-con'>
                                <p>3</p>
                                <p>Missed This Month</p>
                            </div>
                            <div className='rate-con'>
                                <p>4</p>
                                <p>Taken This Week</p>
                            </div>
                        </div>
                    </div>
                    <div className='tab-con'>
                            <button onClick = {this.onTab1} type = "button" className={overClass}>OverView</button>
                            <button  onClick={this.onTab2} type='button' className={recentClass}>Recent Activity</button>
                            <button onClick={this.onTab3} type='button' className={calenderClass}>Calender</button>
                            <button onClick={this.onTab4} type='button' className={notificationClass}>Notifications</button>
                    </div>
                    <div>
                        {this.onBottomResult()}
                    </div>
                </div>
            </div>
        )
    }
}

export default CareTaker