import { useState } from 'react';
import Navbar from "./components/Navbar";

function App(){

    // Set a state for count - initial state of 0 and setCount is function to change state value of count
    // Set a state for names - initial state of [] and setNames is function to change state value of names
    const [names, setNames] = useState([]);

    // Function to be exectuted when the name form is submitteed
    function handleNameClick(e){
        // Prevent default of refreshing page
        e.preventDefault();
        // Get the value from the form
        const name = e.target.firstName.value;
        let newNames = [...names, name]
        // Set the state of names to be the current state of names + the new name
        setNames(newNames)
    }

    function clearNames(e){
      e.preventDefault()
      setNames.clear()
    }



    return (
        <>
            <Navbar/>
            <div className='container'>
                <h1 className='text-center'>TODO LIST</h1>
                <form onSubmit={handleNameClick}>
                    <input type='text' className='form-control mb-2' placeholder='What is your plans for today?' name='firstName' />
                    <input className='text-center btn btn-success' type='submit' value='Submit' />
                </form>
                <div className='text-start card my-2'>
                  <ul className='my-3'>
                    {names.map((n, i) =>
                    <li key={i} className='my-3' >
                      {n}
                      
                    </li>
                    )}
                    
                  </ul>
                </div>
                <form onSumbit={clearNames}>
                  <input className='text-center btn btn-secondary' type='submit' value='clear' />
                </form>
      
            </div>
        </>
    )
}

export default App;