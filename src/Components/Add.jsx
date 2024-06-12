import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

export const Add = () => {
    const [data,changeData]=useState(
        {
            "title":"",
            "desc":"",
            "date":"",
            "duration":"",
            "venue":"",
            "trainername":""
        }
    )
    const inputHandler=(event)=>{
        changeData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
        axios.post("http://localhost:8084/",data).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success")
                    {
                        alert("success")
                    }
                    else{
                        alert("error")
                    }
            }
        ).catch()
    }
  return (
    <div>
        <Navbar/>
        <div className="container">
            <row>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Course Title</label>
                            <input type="text" className="form-control" name='title' value={data.title} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">course description </label>
                            <input type="text" className="form-control" name='desc' value={data.desc} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">course date</label>
                            <input type="date" className="form-control" name='date' value={data.date} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Duration</label>
                            <input type="number" className="form-control" name='duration' value={data.duration} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Venue</label>
                            <input type="text" className="form-control" name='venue' value={data.venue} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">trainer Name</label>
                            <input type="text" className="form-control"  name='trainername' value={data.trainername} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValue}>Submit</button>
                        </div>
                    </div>
                </div>
            </row>
        </div>
    </div>
  )
}
