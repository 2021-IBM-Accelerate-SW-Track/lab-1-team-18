import {React, useState} from 'react'
import { Typography, Grid } from '@material-ui/core'

const ItemText = ({item, editItem}) => {

    const [toggle, setToggle] = useState(true);
    const [text, setText] = useState(item.text);

    if (toggle){
        return(
            <div style={{wordWrap:"break-word"}} onDoubleClick={() => {
                setToggle(false);
            }}>
                {text}
            </div>
        );
    }
    else{
        return (
            <input type='text'
            value={text}
            onChange={(event) => {
                setText(event.target.value);
                editItem(item.id, event.target.value);
            }}
            onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === 'Escape') {
                    setToggle(true);
                    event.preventDefault();
                    event.stopPropagation();
                }
            }}
            autoFocus={true}
            />
        );
    }
}

export default ItemText
