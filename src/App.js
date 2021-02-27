import React, { useState } from "react";

// This is a local Storage Demo
// The point of this demo is to show you that you can get your app to remember the values 
// held in state after you refresh the tab
// What we do is save our state in local storage and then pull it from local storage and assign it
// to our state
// this is how react apps remember we are logged in or remember what we had in our basket after we refresh the tab
// Except they refresh the state instantly before it renders on your screen whereas in this demo we use buttons with onClick functions
// They might not use localStorage but they either use cookies or session storage which works in a similar way
// if you want to see your localstorage you can see it in your chrome browser by opening developer Tools, clicking on applications
// (applications is next to console, sources, network)
// and then clicking on localStorage. 

function App() {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count => count + 1)
  }
  const saveCountinStorage = () => {
    // Set the variable count in Local Storage as the "key" count.
    localStorage.setItem("count", count)
  }
  const pullCountFromStorageAndSetCount = () => {
    // Get the item from LocalStorage

    const storedCount = localStorage.getItem("count")
    // When you pull it its in string form, you need 
    //to convert that into number by running Parse function
    // parse function will convert whatever is held in localstorage to what it was before it was set in storage
    // so you can parse back to array, object, number, boolean etc 
    const storedCountAsNumber = JSON.parse(storedCount)

    // set State variable Count to the Local Storage Value
    setCount(storedCountAsNumber)
  }

  const DeleteLocalStorageValueForCount = ( ) => {
    localStorage.removeItem("count")
  }

  return (
    <div className="App">
      <button onClick={() => addCount()}>Increase "Count" State Variable by 1</button>
      <h2> The "Count" State Variable ={count} </h2>
      <button onClick={() => saveCountinStorage()}> Save Count variable in LocalStorage</button>
      <br />
      <br />
      <button onClick={() => pullCountFromStorageAndSetCount()}>
        Pull "Count" variable from storage and assign it to the count state
      </button>
      <br/>
      <br/>
      <button onClick={() => DeleteLocalStorageValueForCount() }>
        Remove from localStorage the variable "Count"
      </button>
    </div>
  );
}

export default App;
