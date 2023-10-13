import { useLoaderData } from "react-router-dom";


const Update = () => {

    const localdata = useLoaderData();

    const hendleupdatesubmit=(event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const updateuser = {
            name,email
        };
        console.log(updateuser)
       fetch(`http://localhost:5000/users/${localdata._id}`,{
        method:'PUT',
        headers:{
            'content-Type': 'application/json',
        },
        body:JSON.stringify(updateuser)
       })
       .then(res=>res.json())
       .then(data=>{
        console.log(data)
        if(data.modifiedCount>0){
            alert("user is update");
            form.reset()
        }
       })
       

    }
    return (
        <div>
            <h1>{localdata.name}</h1>
            <form  onSubmit={hendleupdatesubmit}>
                <input type="text" name="name" defaultValue={localdata?.name} id="" /><br />
                <input type="email" name="email" defaultValue={localdata?.email} id="" /><br /><br />
                <input type="submit" value="Update user" />
            </form>
        </div>
    );
};

export default Update;