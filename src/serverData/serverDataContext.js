import React, { createContext, useContext, useState } from 'react';

const ServerDataContext = createContext();

export function useServerData() {
    return useContext(ServerDataContext);
}

export function ServerDataProvider({children}) {
    const [currentServer, setCurrentServer] = useState({});

    return (
        <ServerDataContext.Provider value={{currentServer, setCurrentServer}}>
            {children}
        </ServerDataContext.Provider>
    )
}