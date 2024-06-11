import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../Firebase/Firebase";

// Create a context
export const AuthContext = createContext(null);

// Firebase Provider Component
const FirebaseProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    // console.log(user);

    // Create user function
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    
    };

        // sign in user
        const signInUser = (email, password) =>{
            return signInWithEmailAndPassword(auth, email, password)
        }
   
    // Observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    // Provide value
    const authInfo = {
        createUser,
        user,
        signInUser
    };

    return (
        // Pass the value to the provider
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;
