import React, { Component } from 'react'
import {Link, Redirect,withRouter} from 'react-router-dom';
import Header from '../header/header'
import Bg from '../../utils/imgs/vector-wave.png'
class VideoChat extends Component{
 constructor(){
   super()
   this.state = {
     room:" "
   }
   this.onRoomInput = this.onRoomInput.bind(this)
   this.onSubmit = this.SubmitForm.bind(this)
 }
 onRoomInput = (e) =>{
   this.setState({
     [e.target.name]:e.target.value
   })
 }
 changeLocation = (e) =>{
   e.preventDefault()
   console.log('this is pushed')
   return this.props.history.push(`/video/${this.state.room.trim()}`)
 }
 SubmitForm = (e) =>{
   console.log('clicked')
  e.preventDefault();
  let roomLocation = this.state.room;
  
  
  this.setState({
    room:" "
  })
 }

 handleClick = () => {
   let room = this.state.room
  this.props.history.push(`video/${room.trim()}`);
}
 
 render(){
   
   return(
     <div className="video">
      <Header/>
     
        <div className="video__info">
         <h1>Video Chat</h1>
         <ul>
            <li>
              Type in the Room you want to join or create
            </li>
         </ul>
        </div>
        
          <form >
            <label>Room Name</label>
            <input name="room" value={this.state.room} typeof="text" placeholder="Room 208" onChange={(e) => this.onRoomInput(e)} />
            <button onClick={(e) => this.SubmitForm(e)} className="btn-create">Create Room</button>
            <button  onClick={(e) => this.changeLocation(e)}  className="btn-join">Join room</button>
            <button onClick={this.handleClick}>Test</button>
          </form>
        </div>
      
      
      )
    }
  }

export default  withRouter(VideoChat);