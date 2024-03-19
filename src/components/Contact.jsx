import { useState } from "react"
import { v4 } from "uuid";

import ContactsList from "./ContactsList";
import inputs from "../constants/input";

import styles from "./Contacts.module.css";

function Contact() {
    const [contacts, setContacts] = useState([]);
    const [alert, setAlert] = useState("");
    const [contact , setContact] = useState({
        id: "",
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
        const newContact = {...contact, id:v4()};
        setContacts((contacts) => [...contacts, newContact]);
        setContact({
            name: "",
            LastName: "",
            email: "",
            phone: "",
        });
    };

    const deleteHandler = (id) => {
        const newContacts = contacts.filter((contact) => contact.id !== id);
        setContacts(newContacts);
    };

  return (
    <div className={styles.container}>
        <div className={styles.form}>
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
       <div className={styles.alert}>{alert && <p>{alert}</p>}</div>
       <ContactsList contacts={contacts} deleteHandler={deleteHandler} />
    </div>
  )
}

export default Contact