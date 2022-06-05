import React, { useState } from "react";
import Form from "./Form";
import DisplayData from "./DisplayData";

function ParentComponent() {
    const [firstName, setFirstName] = useState("John");
    const [lastName, setLastName] = useState("Henry");
    const [newsletter, setNewsLetter] = useState(false);

    function handleFirstNameChange(event) {
        setFirstName(event.target.value);
        console.log({firstName});
        const value = event.target.value;
        console.log({value});
    }


    function handleLastNameChange(event) {
        setLastName(event.target.value);
        console.log(lastName);
    }


    function handleNewsletterChange(event) {
        setNewsLetter(event.target.checked);
    }

    console.log({firstName});
    return (
        <div>
            <Form
                firstName={firstName}
                lastName={lastName}
                handleFirstNameChange={handleFirstNameChange}
                handleLastNameChange={handleLastNameChange}
                newsletter={newsletter}
                handleNewsletterChange={handleNewsletterChange}
            />

            <DisplayData firstName={firstName} lastName={lastName} />
        </div>
    );
}

export default ParentComponent;
