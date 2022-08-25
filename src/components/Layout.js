import React, { useState } from 'react'

import Navbar from './Navbar'
import Sidebar from './Sidebar'

import Footer from './Footer'
// import "../assets/css/main.css";
import GlobalStyles from '../assets/themes/globalStyles'

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <GlobalStyles />
      <Navbar toggleSidebar={toggleSidebar} />

      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      {children}

      <Footer />
    </>
  )
}

export default Layout
