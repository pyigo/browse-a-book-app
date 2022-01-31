import React from 'react';
import { useState } from 'react';
import Navbar from './components/Navbar';
// contexts
import UserContext from './Contexts/UserContext';



const App = () => {

  const [user, setUser] = useState("");
  return (
    <div className='container'>
      <UserContext.Provider value={user}>
        <Navbar />
      </UserContext.Provider>

    </div>
  );
}

export default App;
