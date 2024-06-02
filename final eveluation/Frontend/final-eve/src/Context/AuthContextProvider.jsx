import { createContext,useState } from "react";
import PropTypes from "prop-types";



export const AuthContext = createContext ();


export function AuthContextProvider({children1}){
    AuthContextProvider.prototype ={
        children1:PropTypes.node.isRequired,
    };


    const [authDeaails , setAuthDetails] = useState({
        isLoggedIn:false,
        token : null,
    })

    const login = (token ) => {
        setAuthDetails({
            isLoggedIn:true,
            token : token,
            });

    };

    const logout = () => {
        setAuthDetails ({
            isLoggedIn:false,
            token : null,

        });

    };

    return(
    <AuthContext.Provider value= {{authDeaails ,login ,logout}}>
        {children1}

    </AuthContext.Provider>
        );

};
