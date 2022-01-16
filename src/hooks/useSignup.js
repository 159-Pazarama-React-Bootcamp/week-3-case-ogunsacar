import { createUserWithEmailAndPassword } from "@firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";


export default function useSignup() {
    const [isPending, setisPending] = useState(false)
    const [error, setError] = useState(null)

    const { dispatch } = useAuthContext();
    const signup = async(email,password) => {
        setError(null)
        setisPending(true)

        try {
            
            const user = await createUserWithEmailAndPassword(auth,email,password)
            setisPending(false)

            dispatch({ type: "LOGIN" , payload : user });


        } catch (err) {
            setError(err.message)
            setisPending(false)
        }

        
    }
    
    return {error, signup, isPending}

}

