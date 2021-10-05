import React, { createContext, useContext, useEffect, useState } from "react";
import { client } from "../utils/api-client";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null);

    useEffect(() => {
        client.get('/auth/me')
            .then(res => setUser(res.data.user))
    }, [])

    return (
        <AuthContext.Provider value={user}>
            { children }
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider component")
    }
    return context;
}

