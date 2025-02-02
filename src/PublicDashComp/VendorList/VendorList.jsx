import React, { useState } from 'react'

import { BiUpArrowAlt } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';

// styles
import classes from './VendorList.module.css'

const VendorList = () => {

  const [data, setData] = useState([
    {
      name: "scraponics",
      state: "Assam",
      about: "  data in React:",
      rating: "4",
      status: "active"
    },
    {
      name: "scraponics",
      state: "Assam",
      about: "  to map data in React:",
      rating: "4",
      status: "close"
    },
    {
      name: "scraponics",
      state: "Assam",
      about: " p data in React:",
      rating: "4",
      status: "active"
    },
    {
      name: "scraponics",
      state: "Assam",
      about: " Here' in React:",
      rating: "4",
      status: "active"
    },
    {
      name: "scraponics",
      state: "Assam",
      about: " Here'sow to map data in React:",
      rating: "4",
      status: "active"
    }
  ]) 

  return (
    <div className={classes.vendorList}>
      <h1 className={classes.heading}>Vendor List</h1>

      <div className={classes.vendorStats}>
        <div className={classes.statBox}>
          <div className={classes.box1}>
            <h1 className={classes.headingStat}>Total Vendors</h1>
            <h1>2019</h1>
          </div>
          <div className={classes.box2}>
            <BiUpArrowAlt />
            <p className={classes.percentage}>60%</p>
          </div>
        </div>
        <div className={classes.statBox}>
          <div className={classes.box1}>
            <h1 className={classes.headingStat}>Active Vendors</h1>
            <h1>1000</h1>
          </div>
          <div className={classes.box2}>
            <BiUpArrowAlt />
            <p className={classes.percentage}>60%</p>
          </div>
        </div>
        <div className={classes.statBox}>
          <div className={classes.box1}>
            <h1 className={classes.headingStat}>Active Vendors</h1>
            <h1>1000</h1>
          </div>
          <div className={classes.box2}>
            <BiUpArrowAlt />
            <p className={classes.percentage}>60%</p>
          </div>
        </div>
      </div>


      {/* list : { vendor, state, about, rating, status} */}
      <div className={classes.table}>
        <div className={classes.tableHeading}>
          <p className={classes.name}>Vendor Name</p>
          <p className={classes.state}>State</p>
          <p className={classes.about}>about!</p>
          <p className={classes.rating}>Rating</p>
          <p className={classes.status}>Status</p>
        </div>

        {data.map((data, index) => (
          <div key={index} className={classes.tableContent}>
          <p className={classes.name}>{data.name}</p>
          <p className={classes.state}>{data.state}</p>
          <p className={classes.about}>{data.about}</p>
          <p className={classes.rating}>{data.rating} <AiFillStar /></p>
          <p className={classes.status}>{data.status}</p>
          </div>
        ))}
      </div>


    </div>
  )
}

export default VendorList