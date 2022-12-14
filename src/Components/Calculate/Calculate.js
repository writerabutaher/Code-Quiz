import React, { useEffect, useState } from 'react';
import "./Calculate.css"
import Swal from 'sweetalert2'
import 'boxicons'

const Calculate = (props) => {
    const { study } = props

    const [minute, setminute] = useState(0)

    useEffect(() => {
        const newTime = localStorage.getItem("breakTime")
        setminute(newTime);
    }, [])

    const setLoacalStorage = (time) => {
        return (
            localStorage.setItem("breakTime", time)
        )
    }

    const break5m = (time) => {
        setLoacalStorage(time)
        setminute(time)
    };
    const break10m = (time) => {
        setLoacalStorage(time)
        setminute(time)
    };
    const break15m = (time) => {
        setLoacalStorage(time)
        setminute(time)
    };
    const break20m = (time) => {
        setLoacalStorage(time)
        setminute(time)
    };
    const break30m = (time) => {
        setLoacalStorage(time)
        setminute(time)
    };

    const showToast = () => {
        Swal.fire(
            'Good job!',
            'You done with your activity',
            'success'
        )
    }

    let TotalTime = 0;
    for (const studytime of study) {
        TotalTime += studytime.time;
    }

    return (
        <div className='container text-white calculate'>
            {/* student info */}
            <div className="d-md-flex gap-2 pt-4">
                <div className="student">
                    <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/yi0wou0N5EsZGDfVejLKR/8e9138369ae3fce8fc552a19db56ffed/Mid_Year_US_Brand_Campaign-headshot_2.png?auto=format%2Ccompress&dpr=1&w=202&h=202&q=40" alt="" />
                </div>

                <div>
                    <h5>Json Anderson</h5>
                    <p><small><box-icon name="map"></box-icon> Dhaka, Bangladesh</small></p>
                </div>
            </div>

            {/* student more info */}
            <div className='d-md-flex my-4 justify-content-evenly text-center bg-primary p-2 rounded'>
                <div>
                    <h5>75 <small>kg</small></h5>
                    <small>Weight</small>
                </div>
                <div>
                    <h5>6.5</h5>
                    <small>Height</small>
                </div>
                <div>
                    <h5>25 <small>yrs</small></h5>
                    <small>Age</small>
                </div>
            </div>

            {/* add a break */}
            <h4>Take a Break</h4>
            <div className='bg-light p-3 rounded d-flex flex-wrap justify-content-around align-items-center my-3 break'>
                <button onClick={() => break5m(5)} className='rounded-pill p-2 mx-1'>5m</button>
                <button onClick={() => break10m(10)} className='rounded-pill p-2 mx-1'>10m</button>
                <button onClick={() => break15m(15)} className='rounded-pill p-2 mx-1'>15m</button>
                <button onClick={() => break20m(20)} className='rounded-pill p-2 mx-1'>20m</button>
                <button onClick={() => break30m(30)} className='rounded-pill p-2 mx-1'>30m</button>
            </div>

            {/* study time */}
            <h4>Time Details</h4>
            <div>
                <div className='bg-light p-3 rounded d-md-flex justify-content-between align-items-center my-3 text-black'>
                    <h5>Study Time</h5>
                    <h5>{TotalTime} Minute</h5>
                </div>
            </div>

            {/* break time */}
            <div>
                <div className='bg-light p-3 rounded d-md-flex justify-content-between align-items-center my-3 text-black'>
                    <h5>Break Time</h5>
                    <h5>{minute} Minute</h5>
                </div>
            </div>

            <button onClick={() => showToast()} className='btn btn-primary w-100 p-2 my-4'>Activity Complete</button>

        </div>
    );
};

export default Calculate;