'use client';

import { useRouter } from "next/navigation";
import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "@/config/firebase";

const AuthContext = createContext();

export const useAuth = useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const router = useRouter();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setUser(user);
            router.push('/');
        })
    }, [user, router]);

    const value = { user };

    return (
        <AuthContext.Provider value={ value }>
            { children }
        </AuthContext.Provider>
    );
};