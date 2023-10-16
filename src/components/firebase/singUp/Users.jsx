import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
    const loadedUsers = useLoaderData()
    const [users, setUsers] = useState(loadedUsers)

    const handleDelete = id =>{
       
        fetch( `https://coffee-store-server-fxx5ozo4t-my-team-88e02784.vercel.app/user/${id}`,{
            method:'DELETE',
        })
        
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if (data.deletedCount > 0) {
                console.log('deleted success')
                const  remainingUsers = users.filter(user => user._id !==id);
                setUsers(remainingUsers)
            }
            
        
        })

    }




    return (
        <div>
            <h1>User:{loadedUsers.length}</h1>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Created at</th>
        <th>Last Logged In</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      
      {
        users.map(user =>   <tr key={user._id}>
            <th>1</th>
            <td>{user.email}</td>
            <td>{user.createdAt}</td>
            <td>{user.lastLoggedAt} </td>
            <td>
                <button onClick={() => handleDelete(user._id)} className="btn">X</button>
            </td>
          </tr> )
     }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;