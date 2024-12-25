import React from "react";
import {useState} from "react";
import { db } from "../firebaseConfig";
import { ref,set } from "firebase/database";
import { uid } from "uid";


function Write(){
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const saveData = () => {

        try {
            const uuid = uid()
            set(ref(db, `/${uuid}`),{
                name,
                age
            })
            setName("")
            setAge("")
        } catch (error) {
            alert("Error: " + error.message);
        }
   };
    
    return(
        <div>
            <input type="text" value = {name} 
            onChange={(e) =>setName(e.target.value)}/>

            <input type="text" value = {age} 
            onChange={(e) =>setAge(e.target.value)}/>

            <button onClick={saveData}>Save Data</button>
        </div>
    )
}

export default Write