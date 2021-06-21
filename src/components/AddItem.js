import { useState } from "react"
import "./AddItem.css"


// The AddItem component takes in the list of items from App.js and the addItem function as props
const AddItem = ({addItem, items}) => {
    // text holds the text that is currently in the input field on line 55, setText will be used on line 55 to clear the input field after submitting the form
    const [text, setText] = useState('');

    // the onSubmit function takes in an event, e as a parameter. e can be used to get the type of event e.g click, doubleclick, mouseover, etc
    // e is passed to this function on line 53 when the onSubmit function is passed
    const onSubmit = (e) => {

        // this variable will be used to determine whether the text being submitted is already in the list of items
        let duplicate = false;
        
        // prevents the page from reloading after submitting the form
        e.preventDefault();

        // if the text field is empty, don't create a new item, just return
        // we could add an alert here that informs the user that they must have some text in the text field to submit the form
        if (!text) {
            return
        }

        // This block of code uses the forEach function to loop through each item in the array of items and check if the text being submitted is already in the list of items
        items.forEach((item)=>{
            if (item.text.toLowerCase() === text.toLowerCase()) {
                alert('That item is already on the list')
                duplicate = true;
            }
        });

        // If duplicate is true this block of code will be skipped
        if (!duplicate){
            // creates new date object and use the date object to create a time string
            const date = new Date();
            const time = `${date.getMonth()}-${date.getDate()}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;

            // calls the addItem function and pass in the object {text,time}
            addItem({text, time});

            // sets the text in the textfield to empty
            setText('');
        }
    }

    return (
        <div className="formContainer">
            {/* This form contains the input field and a submit button
                In react, forms have an onSubmit event listener that listens for when the form is submitted, and then calls a specific function
                In this case, it calls the onSubmit function that was defined on line 11
            */}
            <form className="form-control" onSubmit={onSubmit}>
                <button data-testid="new-item-button" type="submit" className="addIcon"><i className="fas fa-plus-square"></i></button>
                <input data-testid="new-item-input" type="text" value={text} className="inputField" onChange={(e)=>setText(e.target.value)} placeholder={"Enter todo item here"}/>
            </form>
        </div>
    )
}

export default AddItem
