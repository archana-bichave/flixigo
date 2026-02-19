import React from 'react'
import { BiUser } from 'react-icons/bi'
import { FaMagnifyingGlass, FaYoutube } from 'react-icons/fa6'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }
  return (
    <div className="grid grid-flow-col p-4 my-auto border border-b-lightgray fixed top-0 left-0 right-0 h-16 bg-white shadow z-50 text-sky-400 self-center shadow-lg">
        <div className="flex col-span-1">
            <GiHamburgerMenu className="h-8 w-8 mr-2 cursor-pointer" onClick={toggleMenuHandler}/>
            <FaYoutube className="h-8 w-8 mr-2"/>
            <span className="font-bold text-3xl cursor-pointer">Flixigo</span>
            
        </div>
        <div className="col-span-10 text-center flex my-auto">
            <input type="text" className="border-lightgray border rounded-l-full w-1/2 p-2"></input>
            <button className="rounded-r-full border border-full p-3 w-14"><FaMagnifyingGlass className="m-auto"/></button>
        </div>
        <div className="col-span-1 self-center">
            <BiUser></BiUser>
        </div>
    </div>
  )
}

export default Header