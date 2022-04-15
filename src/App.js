//import {useState}from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/app.css'
import Form from './components/Form'
import List from './components/List'
//import Lists from './components/Lists'

function App() {
  //const [Lists]=useState(()=>{})
  return (
    <div id="root">
      <div className="container">
        <h1>todo list</h1>
        <Form />
        <List />
      </div>
    </div>
  )
}

export default App
