import React, { useCallback, useState } from 'react';

import Avatar from '../Avatar/Avatar';
import MenuItem from '../MenuItem/MenuItem';

import { AiOutlineMenu } from 'react-icons/ai';
import { LuSun } from 'react-icons/lu';

import classes from './UserMenu.module.css';
import { Link } from 'react-router-dom';

const UserMenu = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);


  return (
    <div className={classes.usermenu}>
      <div className={classes.level}>
        <div className={classes.item1} onClick={() => { console.log("hellow world!") }}>
          {/* hellow */}
          <LuSun />
        </div>
        <div className={classes.item2} onClick={toggleOpen}>
          <AiOutlineMenu />
          <div className={classes.imageContainer}>
            <Avatar />
          </div>
        </div>
      </div>

      {isOpen && (
        <div className={classes.dropdown}>

          <div className={classes.dropdownContent}>
            <>
              <Link to="/logininduser" style={{
                textDecoration: "none",
                color: "#111"
              }}>
                <MenuItem label="Login as User" />
              </Link>
              <Link to="/signupinduser" style={{
                textDecoration: "none",
                color: "#111"
              }}>
                <MenuItem label="SignUp as User" />
              </Link>
              <Link to="/loginorg" style={{
                textDecoration: "none",
                color: "#111"
              }}>
                <MenuItem label="Login as Org" />
              </Link>
              <Link to="/signuporg" style={{
                textDecoration: "none",
                color: "#111"
              }}>
                <MenuItem label="SignUp as Org" />
              </Link>
              <Link to="/loginvendor" style={{
                textDecoration: "none",
                color: "#111"
              }}>
                <MenuItem label="Login as Vendor" />
              </Link>
              <Link to="/signupvendor" style={{
                textDecoration: "none",
                color: "#111"
              }}>
                <MenuItem label="SignUp as Vendor" />
              </Link>
            </>
          </div>

        </div>
      )}
    </div>
  )
}

export default UserMenu