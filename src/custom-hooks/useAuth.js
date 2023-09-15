import {useState,useEffect} from 'react';
import {onAuthStateChange} from 'firebase/auth'
import {auth} from '../firebase.config'

const UseAuth = () => {

    const [currentUser,setCurretUser]=useState({})

    useEffect(()=>{
        onAuthStateChange(auth,(user)=>{
            if(user){
                setCurretUser(user)
            }
            else{
                setCurretUser(null)
            }
        })
    })
    return {
        currentUser,
    }
}

export default UseAuth;
