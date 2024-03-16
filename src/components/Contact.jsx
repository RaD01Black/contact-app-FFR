import { useState } from "react"

function Contact() {

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
        console.log(contact)
    }

  return (
    <div>
        <div>
            <input type="text" placeholder="Name" name="name" value={contact.name} onChange={changeHandler} />
            <input type="text" placeholder="Last Name" name="LastName" value={contact.LastName} onChange={changeHandler} />
            <input type="text" placeholder="Email" name="email" vale={contact.email} onChange={changeHandler} />
            <input type="number" placeholder="Phone" name="phone"value={contact.phone} onChange={changeHandler} />
            <button onClick={addHandler}>Add contact </button>
       </div>
    </div>
  )
}

export default Contact