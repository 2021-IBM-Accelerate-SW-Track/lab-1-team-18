import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import { Typography, Grid } from '@material-ui/core'
import { useState } from 'react'
import DeleteIcon from '@material-ui/icons/DeleteOutlined'
import { IconButton } from '@material-ui/core'
import ItemText from './ItemText'

// The Item takes in item, which is an object of the form {id, text, time} and the deleteItem function
const Item = ({item, deleteItem, editItem}) => {
    
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
        // <Box 
        // display="flex"
        // width="400px"
        // border={2}
        // borderRadius={5}
        // justifyContent="center"
        // my={0.5}
        // onDoubleClick={updateItem}
        // bgcolor = {checked ? "#bfbdbd": "white"}
        // >
        //     {/* checkbox for marking the task as complete
        //         the onChange event listener on line 40 listens for a click event on the checkbox and calls the setChecked function from line 13 */}
        //     <CheckBox
        //     checked={checked}
        //     onChange={(e) =>setChecked(e.target.checked)}
        //     color="primary"
        //     inputProps={{'aria-label':'secondary checkbox'}}
        //     />

        //     {/* This box displays the text and the time it was created */}
        //     <Box style={{flex:'10px 1 1'}}>
        //         <Typography style={{wordWrap:'break-word', "text-align":'left'}}>
        //             {item.text}
        //         </Typography>
        //         <Typography variant="body2" color="secondary" style={{"text-align":"left"}}>
        //             {item.time}
        //         </Typography>
        //     </Box>

        //     {/* The delete button has an onClick event listener that calls the deleteItem function*/}
        //     <IconButton aria-label="delete" onClick={()=>deleteItem(item.id)}>
        //         <DeleteIcon color="error"/>
        //     </IconButton>
        // </Box>
        <div style={{color:"white", backgroundColor:"black", borderRadius:"5px", width:"425px", marginBottom:"10px"}}>
            <Grid container>
                <Grid item xs={2}>
                    <Checkbox 
                    style={{color:"white"}}
                    checked={checked}
                    onChange={(e) =>setChecked(e.target.checked)}
                    />
                </Grid>
                <Grid item container xs={8}>
                    <Grid item xs={12} style={{textAlign:"left"}}><Typography component={"span"} variant="body1" style={{color:"white"}}><ItemText item={item} editItem={editItem}/></Typography></Grid>
                    <Grid item xs={12} style={{textAlign:"left"}}><Typography variant="body2" style={{color:"grey"}}>{item.time}</Typography></Grid>
                </Grid>
                <Grid item xs={2}>
                    <IconButton aria-label="delete" onClick={()=>deleteItem(item.id)}>
                        <DeleteIcon variant="outlined" style={{color:"white"}}></DeleteIcon>
                    </IconButton>
                </Grid>
            </Grid>
        </div>
    )
}

export default Item
