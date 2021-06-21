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
        <div style={{color:"white", backgroundColor:"black", borderRadius:"5px", width:"700px", margin:"10px 5px"}}>
            <Grid container wrap="wrap">
                <Grid item xs={2} sm={1}>
                    <Checkbox 
                    style={{color:"white"}}
                    checked={checked}
                    onChange={(e) =>setChecked(e.target.checked)}
                    />
                </Grid>
                <Grid item container xs={8} sm={10}>
                    <Grid item xs={12} style={{textAlign:"left"}}><Typography display="inline" component={"span"} variant="h6" style={{color:"white"}}><ItemText item={item} editItem={editItem}/></Typography></Grid>
                    <Grid item xs={12} style={{textAlign:"left"}}><Typography variant="body2" style={{color:"grey"}}>{item.time}</Typography></Grid>
                </Grid>
                <Grid item xs={2} sm={1}>
                    <IconButton aria-label="delete" onClick={()=>deleteItem(item.id)}>
                        <DeleteIcon variant="outlined" style={{color:"white"}}></DeleteIcon>
                    </IconButton>
                </Grid>
            </Grid>
        </div>
    )
}

export default Item
