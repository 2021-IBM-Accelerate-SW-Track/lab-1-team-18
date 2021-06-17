import React from 'react'
import CheckBox from '@material-ui/core/CheckBox'
import { Typography } from '@material-ui/core'
import { useState } from 'react'
import { Box } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import { IconButton } from '@material-ui/core'

// The Item takes in item, which is an object of the form {id, text, time} and the deleteItem function
const Item = ({item, deleteItem}) => {
    
    // checked is true or false, depending on whether the checkbox is checked or not
    // setChecked is used to update the value of checked after the checkbox is clicked
    const [checked, setChecked] = useState(false);

    // This block of code is used to update the text content of an item. Still trying to figure this out
    const updateItem = (e) => {
        if (e.target.type === 'checkbox') {
            return
        }
        alert('Updating list item...')
    }

    return (
        // Box with styles for the frontend to update
        <Box 
        display="flex"
        width="400px"
        border={2}
        borderRadius={5}
        justifyContent="center"
        my={0.5}
        onDoubleClick={updateItem}
        bgcolor = {checked ? "#bfbdbd": "white"}
        >
            {/* checkbox for marking the task as complete
                the onChange event listener on line 40 listens for a click event on the checkbox and calls the setChecked function from line 13 */}
            <CheckBox
            checked={checked}
            onChange={(e) =>setChecked(e.target.checked)}
            color="primary"
            inputProps={{'aria-label':'secondary checkbox'}}
            />

            {/* This box displays the text and the time it was created */}
            <Box style={{flex:'10px 1 1'}}>
                <Typography style={{wordWrap:'break-word'}}>
                    {item.text}
                </Typography>
                <Typography variant="caption" color="secondary">
                    {item.time}
                </Typography>
            </Box>

            {/* The delete button has an onClick event listener that calls the deleteItem function*/}
            <IconButton aria-label="delete" onClick={()=>deleteItem(item.id)}>
                <DeleteIcon color="error"/>
            </IconButton>
        </Box>
    )
}

export default Item
