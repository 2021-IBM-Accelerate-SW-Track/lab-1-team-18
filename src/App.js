// import Header from './component/header';
// import './App.css';
// import { EnterListItem } from './component/enterListItem';
// import React from "react";

// function App(){
//   return(
//     <div className="container">
//       <Header/>
//       <EnterListItem/>
//     </div>
//   );
// }

// export default App;


import './App.css';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core'
import AddItem from './components/AddItem'
import { useState } from 'react';
import ItemsList from './components/ItemsList';

function App() {

  // The useState function is used to store and update data
  // const [data, functionToUpdateData] = useState(initialData)
  const [items, setItems] = useState([
    {
      id: 1,
      text: "get the groceries",
      time: "2021-16-6 19:59:PM"
    }
  ])


  // The addItem function will be passed to itemList (the UI for displaying the items) as a prop
  const addItem = (textAndTime) => {
    // the textAndTime parameter passed into this function is actually an object in this format: {text:"Mow the lawn", time:"2021-16-6 19:59:PM"}

    // create a new ID with length of items + 1
    const id = items.length + 1
    
    // ...textAndTime passes each attribute in textAndTime to newItem
    // {id, ...textAndTime} = {id, textAndTime.text, textAndTime.time}
    const newItem = {id, ...textAndTime}

    // since newItem cannot be directly appended to the list of items, the setItems function from line 12 is called to update the list of items
    setItems([...items, newItem])
  }


  // The deleteItem function will be passed to itemList as a prop
  const deleteItem = (id) => {
    // the id parameter passed here is the id of the object(item) to be deleted

    // filter is a javascript function that filters the elements of a list based on a particular attribute
    setItems(items.filter((item)=>item.id !== id))
  }

  return (
    <div className="App">


      {/* The box component houses the entire UI of the app. https://material-ui.com/components/box/#box */}
      <Box display="flex" flexDirection="column" border={2} width={600} alignItems="center" my={4} py={4} borderRadius={10}>

        <header>
          {/* https://material-ui.com/components/typography/#typography */}
          <Typography variant="h4">
            To-do List
          </Typography>
        </header>

        {/* The AddItem component is displayed after the header. This component is created in src/components/AddItem.js 
         It takes in the the list of items from line 12 and the addItem function from line 22 as props*/}
        <AddItem items={items} addItem={addItem}/>


        {/* The ItemsList component is displayed after the AddItem component. This component is created in src/components/ItemsList.js 
            It takes in the the list of items from line 12 and the deleteItem function from line 38 as props
        */}
        <ItemsList items={items} deleteItem={deleteItem}/>
      </Box>
    </div>
  );
}

export default App;

