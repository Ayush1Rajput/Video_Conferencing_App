import axios from 'axios'
import {Children, createContext, useContext, useState}  from 'react'

export const AuthContext = createContext({});


const client = axios.create({
    baseURL:"localhost:8000/api/v1/users"
})


export const AuthProvider = ({Children})=>{
    const authContext = useContext(AuthContext);
    
    const [userData, setUserData] = useState(authContext);

    const router = useNavigate();

    const data = {
        userData, setUserData,
    }
}