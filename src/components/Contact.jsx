import { useState } from "react"

import ContactsList from "./ContactsList";
import inputs from "../constants/input";

function Contact() {
    const [contacts, setContacts] = useState([]);
    const [alert, setAlert] = useState("");
    const [contact , setContact] = useState({
        name: "",
        LastName: "",
        email: "",
        phone: "",
    });

    const changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setContact((contact) => ({ ...contact, [name]: value}));
    };

    const addHandler = () => {
        if (
            !contact.name ||
            !contact.LastName ||
            !contact.email ||
            !contact.phone 
        ) {
            setAlert("Please Enter valid data!");
            return;
        }
        setAlert(""); 
        setContacts((contacts) => [...contacts, contact]);
        setContact({
            name: "",
            LastName: "",
            email: "",
            phone: "",
        });
    };

  return (
    <div>
        <div>
            {inputs.map((input, index) => (
                <input 
                key={index}
                type={input.type}
                placeholder={input.placeholder}
                name={input.name}
                value={contact[input.name]}
                onChange={changeHandler}
                />
            ))}
            <button onClick={addHandler}>Add contact </button>
       </div>
       <div>{alert && <p>{alert}</p>}</div>
       <ContactsList contacts={contacts} />
    </div>
  )
}

export default Contact