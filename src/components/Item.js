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
    const primary = "#16ffbd";
    const secondary = "black";
    const [checked, setChecked] = useState(false);
    const [bgColor, setbgColor] = useState(secondary);
    const [textColor, setTextColor] = useState(primary);

    const handleCheck = (e) => {
        if (!checked){
            setbgColor(primary);
            setTextColor(secondary);
        }
        else {
            setbgColor(secondary);
            setTextColor(primary);
        }
        setChecked(e.target.checked);
    }

    return (
        <div style={{color:"white", backgroundColor: bgColor, border:"2px solid black" , borderRadius:"5px", width:"700px", margin:"10px 5px", boxShadow:"5px 5px rgba(0, 0, 0, .6)"}}>
            <Grid container wrap="wrap">
                <Grid item xs={2} sm={1}>
                    <Checkbox 
                    style={{color:textColor}}
                    checked={checked}
                    onChange={(e) => handleCheck(e)}
                    />
                </Grid>
                <Grid item container xs={8} sm={10}>
                    <Grid item xs={12} style={{textAlign:"left"}}><Typography display="inline" component={"span"} variant="h6" style={{color:textColor}}><ItemText item={item} editItem={editItem}/></Typography></Grid>
                    <Grid item xs={12} style={{textAlign:"left"}}><Typography variant="body2" style={{color:"grey"}}>{item.time}</Typography></Grid>
                </Grid>
                <Grid item xs={2} sm={1}>
                    <IconButton aria-label="delete" onClick={()=>deleteItem(item.id)}>
                        <DeleteIcon variant="outlined" style={{color:textColor}}></DeleteIcon>
                    </IconButton>
                </Grid>
            </Grid>
        </div>
    )
}

export default Item
