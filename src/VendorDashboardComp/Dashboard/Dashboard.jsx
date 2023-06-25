import React from 'react';

import { RiCustomerService2Line } from 'react-icons/ri';

// styles 
import classes from './Dashboard.module.css';

const Dashboard = () => {
    return (
        <div className={classes.dashboard}>
            <h1 className={classes.heading}>Dashboard</h1>
            <div className={classes.dashboardContainer}>
                <div className={classes.leftSide}>
                    <div className={classes.dashboardCardContainer}>
                        <div>
                            <div className={classes.statContainer}>
                                <div className={classes.box1}>
                                    <p>Total Earnings</p>
                                    <RiCustomerService2Line className={classes.icon} />
                                </div>
                                <p className={classes.number}>200</p>
                                <div className={classes.box1}>
                                    <p>+14%</p>
                                    <p>than last month</p>
                                </div>
                            </div>
                            <div className={classes.statContainer}>
                                <div className={classes.box1}>
                                    <p>Today Earnings</p>
                                    <RiCustomerService2Line className={classes.icon} />
                                </div>
                                <p className={classes.number}>12 tons</p>
                                <div className={classes.box1}>
                                    <p>+14%</p>
                                    <p>than yesterday</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={classes.statContainer}>
                                <div className={classes.box1}>
                                    <p>Weekly Earning</p>
                                    <RiCustomerService2Line className={classes.icon} />
                                </div>
                                <p className={classes.number}>1k tons</p>
                                <div className={classes.box1}>
                                    <p>+16%</p>
                                    <p>than last week</p>
                                </div>
                            </div>
                            <div className={classes.statContainer}>
                                <div className={classes.box1}>
                                    <p>Monthly Earnings</p>
                                    <RiCustomerService2Line className={classes.icon} />
                                </div>
                                <p className={classes.number}>4k tons</p>
                                <div className={classes.box1}>
                                    <p>+14%</p>
                                    <p>than last month</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.rightSide}>

                </div>
            </div>
        </div>
    )
}

export default Dashboard