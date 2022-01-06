import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaListUl } from "react-icons/fa";

function Header() {
    const [showMenu, setShowMenu] = useState('md:hidden')
    const menuItems = [
        {
            title:'Home',
            key:'/'
        },
        {
            title:'Resume',
            key:'/resume'
        },
        {
            title:'Projects',
            key:'/projects'
        },
        {
            title:'Contact',
            key:'/contact'
        }
    ]
    const pathName = window.location.pathname
    return (
        <div className='text-white fixed top-0 right-0 left-0 z-10'>
            <div className={`flex bg-theme justify-between items-center p-2 shadow-lg ${showMenu !== 'md:hidden' && 'md:flex-col'}`}>
                <div className='flex justify-between items-center w-full'>
                    <h1 className='ml-4 md:ml-2 text-4xl font-vus font-bold'>Chiraag</h1>
                    {/* <button 
                    >MENU</button> */}
                    <FaListUl onClick={() => {
                        if (showMenu === 'md:hidden') {
                            setShowMenu('')
                        } else {
                            setShowMenu('md:hidden')
                        }
                    }}
                    className='lg:hidden xl:hidden 2xl:hidden 3xl:hidden 4xl:hidden md:flex w-8 h-8 mr-1'/>
                </div>
                {/* DESKTOP NAVBAR */}
                <div className='flex md:hidden font-merr'>
                    {menuItems.map((item) => {
                        return (
                            <li className={`list-none mx-5 p-1 ${item.key===pathName && 'bg-white text-black reounded-md'}`} >
                                <Link to={`${item.key}`}>{item.title}</Link>
                            </li>
                        );
                    })}
                </div>
                {/* MOBILE NAVBAR */}
                <div className={`md:flex flex-col lg:hidden xl:hidden 2xl:hidden 3xl:hidden 4xl:hidden font-merr items-end jusstify-end w-full ${showMenu}`}>
                    {menuItems.map((item) => {
                        return (
                            <li className={`list-none my-2 p-1 ${item.key===pathName && 'bg-white text-black reounded-md'}`}>
                                <Link to={`${item.key}`}>{item.title}</Link>
                            </li>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Header
