import React, { useContext, useState, useEffect } from 'react';
import { api } from '../services/api';
import { getLocal } from '../services/localStorage';

const UserContext = React.createContext();

export function useUser() {
    return useContext(UserContext);
}

export function UserProvider({ children }) {

    const [user, setUser] = useState();

    useEffect(() => {
        async function fecthUser() {
            await api.get(`/usuario/${getLocal("userId")}`).then(res => {
                setUser(res.data)
            }).catch(err => {
                console.log(err);
            });
        }

        fecthUser();
    })
    

    return (
        <UserContext.Provider value={{ user }}>
            {children}
        </UserContext.Provider>
    )
}


