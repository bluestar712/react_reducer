import React, { useState } from 'react';
import User from './User';
import { getUsers, useUsersDispatch, useUsersState } from './UsersContext';


function Users(){
    
    const[userId, setUserId] = useState(null);
    const state = useUsersState();
    const dispatch = useUsersDispatch();
    
    const {loading, data: users, error} = state.users;

    const fetchData = () => {
        getUsers(dispatch);
    }

    if(loading) return <div>Loading...</div>
    if(error) return<div>Found Error!</div>

    if(!users) return <button onClick={fetchData}>refresh</button>;

    return(
        <>
            <ul>
                {users.map(user => (
                    <li key={user.id}
                        onClick={() => setUserId(user.id)}
                        style={{cursor: 'pointer'}}
                    >
                        {user.name}({user.email})
                    </li>
                ))}
            </ul>
            <button onClick={fetchData}>refresh</button>
            {userId && <User id={userId}/>}
        </>
    );
}

export default Users;
