import React from 'react'
import { useLocation } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Header from './header/Header';
import Footer from './footer/Footer';
import Sidebar from './sidebar/Sidebar';
import { SidebarStyle } from './LayoutStyle';
import { Outlet } from 'react-router-dom';
import "./Layout.css"


const Layout = () => {

const location = useLocation();


  return (
    <>
    <SidebarStyle>
    <Sidebar/>
    </SidebarStyle>
    <Navbar/>
    {location.pathname === "/login" ?
     <br/> :
    <Header/>
   
    }
     <main>
      <Outlet/>
     </main>
    <Footer/>
    </>
  )
}

export default Layout