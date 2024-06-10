import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewFriends = () => {
    const [data,changeData] = useState([])
    const fetchData = ()=>{
        axios.get("https://friendsapi-re5a.onrender.com/view").then(
            (response)=>{
                changeData(response.data)
                console.log(response.data)
            }
        ).catch(
            (error)=>{
                alert(error.message)
            }
        ).finally()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Index</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">FriendName</th>
                                    <th scope="col">FriendNickName</th>
                                    <th scope="col">FriendDescription</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map(
                                        (value,index)=>{
                                            return <tr>
                                            <th scope="row">{index}</th>
                                            <th>{value.name}</th>
                                            <td>{value.friendName}</td>
                                            <td>{value.friendNickName}</td>
                                            <td>{value.DescribeYourFriend}</td>
                                        </tr>
                                        }
                                    )
                                }
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewFriends