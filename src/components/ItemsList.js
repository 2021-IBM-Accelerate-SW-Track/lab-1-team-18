import React from 'react'
import Item from './Item'

// The ItemsList component is defined as a functional component here.
// It takes in the list of items and the deleteItem function as props
const ItemsList = ({items, deleteItem, editItem}) => {
    return (
        <div>

          {/* The map function is applies a specified function on each element of a list and returns a new list
              In this case, for each element(item) in the list of items that was passed in on line 6, an <Item/> component is created
              The <Item/> component takes in the item.id as a key, the item object itself, and the deleteItem function
          */}
          {items.map((item)=>(<Item key={item.id} item={item} deleteItem={deleteItem} editItem={editItem}/>))}  
        </div>
    )
}

export default ItemsList