import {useState,useEffect} from 'react';
import {onAuthStateChanged} from 'firebase/auth'
import {auth} from '../firebase.config'

const UseAuth = () => {

    const [currentUser,setCurretUser]=useState({})

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
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
