import React, { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import { onValue, ref, set } from "firebase/database";
import { uid } from "uid";

function Write() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [users, setUsers] = useState([]);

    // Fetch data from Firebase
    useEffect(() => {
        const dbRef = ref(db);
        onValue(dbRef, (snapshot) => {
            const data = snapshot.val();
            if (data !== null) {
                // Convert the object to an array and set users state
                const userArray = Object.values(data);
                setUsers(userArray);
            }
        });
    }, []);

    // Write data to Firebase
    const saveData = async () => {
        try {
            const uuid = uid(); // Generate a unique ID
            await set(ref(db, `/${uuid}`), { name, age });
            setName(""); // Reset input fields
            setAge("");
            alert("Data saved successfully!");
        } catch (error) {
            alert("Error: " + error.message);
        }
    };

    return (
        <div>
            <h1>Write Data to Firebase</h1>
            <input
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <br />
            <input
                type="text"
                placeholder="Enter age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />
            <br />
            <button onClick={saveData}>Save Data</button>
            <h2>Users List</h2>
            {users.map((user, index) => (
                <div key={index}>
                    <h3>Name: {user.name}</h3>
                    <h3>Age: {user.age}</h3>
                </div>
            ))}
        </div>
    );
}

export default Write;
