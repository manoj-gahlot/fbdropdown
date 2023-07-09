import './App.css';
import React, { useState } from "react";
import { ReactComponent as BellIcon } from './icons/bell.svg';
import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as BoltIcon } from './icons/bolt.svg';


function App() {
  return (
    <div className="App">
      <Navbar>
        <NavItem icon={<PlusIcon />} />
        <NavItem icon={<BellIcon />} />
        <NavItem icon={<MessengerIcon />} />
        <NavItem icon={<CaretIcon />}>
          <DropdownMenu />
        </NavItem>
      </Navbar>
    </div>
  );
}
function DropdownMenu() {
  function DropdownItem(props) {
    return (<a href='#' className='menu-item'>
      <span href="#" className='icon-button'>{props.leftIcon}</span>
      {props.children}
      <span href="#" className='icon-right'>{props.rightIcon}</span>
    </a>
    );
  }

  return (
    <div className="dropdown">
      <DropdownItem>MyProfile</DropdownItem>
      {/* <DropdownItem>MyProfile</DropdownItem>
      <DropdownItem>MyProfile</DropdownItem> */}
      <DropdownItem leftIcon={<CogIcon />} rightIcon={<ChevronIcon />}>Setting</DropdownItem>
      <DropdownItem leftIcon={<CogIcon />} rightIcon={<ChevronIcon />}>Setting</DropdownItem>
      <DropdownItem leftIcon={<CogIcon />} rightIcon={<ChevronIcon />}>Setting</DropdownItem>
    </div>
  )
}
function Navbar(props) {
  return (
    <nav className='navbar'>
      <ul className='navbar-nav'>{props.children}</ul>
    </nav>
  )
}
function NavItem(props) {
  const [open, setOpen] = useState(false);
  return (
    <li className='nav-item'>
      <a href="#" className='icon-button' onClick={() => setOpen(!open)}>
        {props.icon}
      </a>
      {open && props.children}
    </li>
  )
}
export default App;
