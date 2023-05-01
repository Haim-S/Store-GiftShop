import React from 'react'
import "./Header.css"
import {UseTheBrainContext} from "../../../context/contextTheBrain";



const Header = () => {

const {isApproval} = UseTheBrainContext();


  return (
    <header>
      <div className='test'>
        {isApproval? <h1>A one time opportunity for 5 minutes you can buy any product in the store at a 50% discount</h1> : ""}
      </div>
    </header>
  )
}

export default Header