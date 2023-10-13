import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from 'react-router-dom'


const Users = () => {
    const loaddata = useLoaderData();
    const [userdata,setuserdata] = useState(loaddata)
    console.log(userdata)

    const hendlebuttonclick = (id) => {
        console.log(id)
        fetch(`http://localhost:5000/users/${id}`,{
            method:"DELETE",
            // headers: {
            //     'content-Type': 'application/json',
            // },
            //  body: JSON.stringify(id)

        })
        .then(res=>res.json())
        .then(onuser=>{
            console.log(onuser)
            if(onuser.acknowledged){
                alert("this item is deleteed");
                const remainguser = userdata.filter(user=>user._id!==id);
                setuserdata(remainguser)
            }
            
        })
    }
    return (
        <div>
            <h1>All users {userdata.length}</h1>
            {
                userdata.map(user => <p key={user._id}> {user._id} {user.name} {user.email}<Link to={`/update/${user._id}`}><button>update</button></Link> <button onClick={() => hendlebuttonclick(user._id)}>X</button></p>)
            }
        </div>
    );
};

export default Users;