import { useState } from 'react'
import Store from './store'
import { Routes, Route } from 'react-router-dom';
import Home from './home'
import Form from './Form'
 

function App() {

  return (
    <Routes>
      <Route  path = '/' element={<Home/>}/>
      <Route  path = '/nitya_creation' element={<Store/>}/>
      <Route path = '/contact_form' element = {<Form/>}/>
    </Routes>
  )
};

export default App
