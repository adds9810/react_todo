import 'bootstrap/dist/css/bootstrap.min.css'
import './css/app.css'
import Form from './components/Form'
import List from './components/List'

function App() {
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
