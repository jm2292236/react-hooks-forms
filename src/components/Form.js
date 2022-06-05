function Form({ 
    firstName, 
    lastName, 
    handleFirstNameChange, 
    handleLastNameChange, 
    newsletter, 
    handleNewsletterChange }) {
    // const [firstName, setFirstName] = useState("John");
    // const [lastName, setLastName] = useState("Henry");
    // const [newsletter, setNewsLetter] = useState(false);

    // function handleFirstNameChange(event) {
    //     setFirstName(event.target.value);
    //     console.log({firstName});
    //     const value = event.target.value;
    //     console.log({value});
    // }


    // function handleLastNameChange(event) {
    //     setLastName(event.target.value);
    //     console.log(lastName);
    // }


    // function handleNewsletterChange(event) {
    //     setNewsLetter(event.target.checked);
    // }

    console.log(handleFirstNameChange);
    return (
        <form>            
            <input type="text" onChange={handleFirstNameChange} value={firstName} />
            <input type="text" onChange={handleLastNameChange} value={lastName} />
            <button type="submit">Submit</button>

            <div>
                <label htmlFor="newsletter">Subscribe to our Newsletter?</label>
                <input
                    type="checkbox"
                    id="newsletter"
                    onChange={handleNewsletterChange}
                    // {/* checked instead of value */}
                    checked={newsletter}
                />
            </div>
        </form>
    );
}

export default Form;
