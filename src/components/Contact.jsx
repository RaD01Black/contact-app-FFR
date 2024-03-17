import { useState } from "react"

import ContactsList from "./ContactsList";

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
            <input type="text" placeholder="Name" name="name" value={contact.name} onChange={changeHandler} />
            <input type="text" placeholder="Last Name" name="LastName" value={contact.LastName} onChange={changeHandler} />
            <input type="text" placeholder="Email" name="email" vale={contact.email} onChange={changeHandler} />
            <input type="number" placeholder="Phone" name="phone"value={contact.phone} onChange={changeHandler} />
            <button onClick={addHandler}>Add contact </button>
       </div>
       <div>{alert && <p>{alert}</p>}</div>
       <ContactsList contacts={contacts} />
    </div>
  )
}

export default Contact