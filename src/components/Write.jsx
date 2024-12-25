import React from "react";
import {useState} from "react";
import { db } from "../firebaseConfig";
import { ref,set } from "firebase/database";


function Write(){
    const [name, setName] = useState('');
    const [age, setAge] = useState('');


    const saveData = () => {



        try {
            set(ref(db, 'data'),{
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