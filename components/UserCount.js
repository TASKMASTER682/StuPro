import {list} from '../actions/user';

import { useState, useEffect } from 'react';

const UserCount=()=>{
    const [values, setValues] = useState({
      
        users: [],
        reaload:true
        
    });

    const {  users,reload} = values;
    

    useEffect(() => {
        loadUsers();
       
    }, [reload]);

   
    const loadUsers = () => {
        list().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setValues({ ...values, users: data });
            }
        });
    };

    return(
        <h2 className="x-large text-light-gray">{users.length}</h2>
    )
}
export default UserCount;