import { createContext, useEffect, useState } from "react";
import { getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    GithubAuthProvider,
    
 } from "firebase/auth";
import { app } from "../firebase/firebase.config";



export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
   

    
    const auth = getAuth(app)

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
           
    }

    const loginWithEmailPassword = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


    const googleProvider = new GoogleAuthProvider();

    const loginWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }


    const gitHubProvider = new GithubAuthProvider();

    const loginWithGithub = () =>{
        setLoading(true);
        return signInWithPopup(auth, gitHubProvider)
    }


    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }



    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            
            setUser(currentUser) 
            setLoading(false);        
            
           
            
            
        })

        return () =>{
            return unSubscribe();
        }

    },[])


    
    const AuthInfo = {
        
        createUser,
        loginWithEmailPassword,
        logOut,
        user,
        loading,
        loginWithGoogle,
        loginWithGithub,
        
        

    }

    return (
        <div>
            <AuthContext.Provider value={AuthInfo}>
                {children}
            </AuthContext.Provider>
            
        </div>
    );
};

export default AuthProvider;