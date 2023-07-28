import React, { useContext, useState, useEffect } from 'react';
import { api } from '../services/api';
import { getLocal } from '../services/localStorage';

const UserContext = React.createContext();

export function useUser() {
    return useContext(UserContext);
}

export function UserProvider({ children }) {

    const [user, setUser] = useState();
    const [userBooks, setUserBooks] = useState();
    const [userBooksFiltered, setUserBooksFiltered] = useState();

    useEffect(() => {
        async function fecthUser() {
            await api.get(`/usuario/${getLocal("userId")}`).then(res => {
                setUser(res.data);
                setUserBooks(res.data.listaLivros);
                setUserBooksFiltered(res.data.listaLivros);
            }).catch(err => {
                console.log(err);
            });
        }

        fecthUser();
    }, [])
    

    return (
        <UserContext.Provider value={{ user, userBooks, userBooksFiltered, setUserBooksFiltered }}>
            {children}
        </UserContext.Provider>
    )
}


