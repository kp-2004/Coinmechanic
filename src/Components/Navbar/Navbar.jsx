import React, { useContext } from 'react'
import './Navbar.css'
import arrow_icon from '../../assets/arrow_icon.png'
import { CoinContext } from '../../Context/CoinContext'
import { Link } from 'react-router-dom'
import Currency from '../../assets/currency.png'

const Navbar = () => {

  const {setCurrency} = useContext(CoinContext)

  const currencyHandler = (e) =>{
    switch (e.target.value){
      case "usd":{
        setCurrency({name: "usd", Symbol: "$"});
        break;
      }
      case "eur":{
        setCurrency({name: "eur", Symbol: "E"});
        break;
      }
      case "inr":{
        setCurrency({name: "inr", Symbol: "Rs"});
        break;
      }
      default:{
        setCurrency({name: "usd", Symbol: "$"});
        break;
      }
    }
  }

  return (
    <div className='navbar'>
      <Link to={'/'}>
      <img src={Currency} width={50} className='logo'/>  <h1>Coin<span>Mechanic</span></h1>
        </Link>
        <ul>
            <Link to={'/'}>Home</Link>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>
        <div className="nav-right">
            <select onChange={currencyHandler}>
                <option value="usd">USD</option>
                <option value="usd">EUR</option>
                <option value="usd">INR</option>
            </select>
            <button>Sign Up <img src={arrow_icon} alt="" /></button>
        </div>
    </div>
  )
}

export default Navbar