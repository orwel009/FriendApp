import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const AddFriend = () => {
    const [data,changeData] = useState(
        {
            "name": "",
             "friendName": "",
             "friendNickName":"",
             "DescribeYourFriend":""
        }
    )
    const inputHandler = (event)=>{
        changeData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
        axios.post("https://friendsapi-re5a.onrender.com/adddata",data).then(
            (response)=>{
                if (response.data.status === "success") {
                    alert("Friend Added Successfully")
                } else {
                    alert("Erorr")
                }
            }
        ).catch()
    }
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">FriendName</label>
                            <input type="text" className="form-control" name='friendName' value={data.friendName} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">FriendNickName</label>
                            <input type="text" className="form-control" name='friendNickName' value={data.friendNickName} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Description</label>
                            <textarea id="" className="form-control" name='DescribeYourFriend' value={data.DescribeYourFriend} onChange={inputHandler}></textarea>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readValue}>AddFriend</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddFriend