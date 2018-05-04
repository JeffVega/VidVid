import React from 'react'
import Header from './header/main-header'
import Footer from './footer/footer'
import Contact from './contacts/contact'
export default class Main extends React.Component{
 constructor(){
   super()
 }

  render(){
  return(
    <div>
    <Header/>
    <Footer/>
    <Contact/>
  </div>
  )
}

}