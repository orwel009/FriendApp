import React, { useState } from 'react'
import Navbar from './Navbar'

const ViewFriends = () => {
    const [data,changeData] = useState(
        [
            {
                "_id": "6665dd357f96fb262b8dd5a6",
                "name": "Ramesh",
                "friendName": "Tovino",
                "friendNickName": "TT",
                "DescribeYourFriend": "Test desc",
                "__v": 0
            },
            {
                "_id": "666694bf2a16f0afd5e07bba",
                "name": "nithya",
                "friendName": "kj",
                "friendNickName": "lhp",
                "DescribeYourFriend": "kihh;[j",
                "__v": 0
            },
            {
                "_id": "6666950b2a16f0afd5e07bbe",
                "name": "",
                "friendName": "",
                "friendNickName": "",
                "DescribeYourFriend": "",
                "__v": 0
            },
            {
                "_id": "666695dd2a16f0afd5e07bc7",
                "name": "",
                "friendName": "",
                "friendNickName": "",
                "DescribeYourFriend": "",
                "__v": 0
            },
            {
                "_id": "666698082a16f0afd5e07bce",
                "name": "",
                "friendName": "",
                "friendNickName": "",
                "DescribeYourFriend": "",
                "__v": 0
            }
        ]
    )
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
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
                                            <th scope="row">{value.name}</th>
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