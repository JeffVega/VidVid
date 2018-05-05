import React from 'react'
import Header from './header/main-header'
import Contact from './contacts/contact'
export default class Main extends React.Component{
 constructor(){
   super()
 }

  render(){
  return(
    <div>
    <Header/>
    <Contact/>
  </div>
  )
}

}