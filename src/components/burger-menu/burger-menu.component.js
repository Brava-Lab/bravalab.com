import React from "react"
import { slide as Menu } from 'react-burger-menu';

const BurgerMenu = () => {
  // const Root = to ? Link : 'BurgerMenu';

  return (
    <Menu styles={{
      bmBurgerButton: {
        position: 'absolute',
        width: '24px',
        height: '24px',
        right: '32px',
        top: '32px'
      },
      bmBurgerBars: {
        background: '#333333',
        height: '4px'
      },
      bmBurgerBarsHover: {
        background: '#a90000'
      },
      bmCrossButton: {
        height: '24px',
        width: '24px'
      },
      bmCross: {
        background: '#FFF'
      },
      bmMenuWrap: {
        position: 'fixed',
        top: '0px',
        bottom: '0px',
        height: '100vh',
        left: '0px'
      },
      bmMenu: {
        background: '#E51B22',
        padding: '32px',
        fontSize: '24px'
      },
      bmItemList: {
        color: '#b8b7ad',
        padding: '24px',
        paddingTop: '48px'
      },
      bmItem: {
        display: 'block',
        color: '#FFF',
        marginBottom: '8px'
      },
      bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
      }
    }}>
      <a id="home" className="menu-item" href="/">Home</a>
      <a id="about" className="menu-item" href="/about">About</a>
      <a id="services" className="menu-item" href="/services">Services</a>
      <a id="carrers" className="menu-item" href="/carrers">Carrers</a>
      <a id="contact" className="menu-item" href="/contact">Contact</a>
    </Menu>
  )
}

export default BurgerMenu
